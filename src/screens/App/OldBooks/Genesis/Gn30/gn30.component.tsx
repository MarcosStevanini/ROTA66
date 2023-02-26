import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { LinearGradient } from 'expo-linear-gradient'
import { FlatList, Image } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'
import Loading from '../../../../../components/Loading/loading.component'

import * as S from './gn30.styles'
import * as T from './gn30.types'

const Gn30: React.FC<T.Gn30Props> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [audio, setAudio] = useState<T.Gn30Props[]>([])

  const theme = useTheme()
  const navigator = useNavigation()

  function handleOpenDetails(audioId: string) {
    navigator.navigate('PlayerAudio', { audioId })
  }

  useEffect(() => {
    setIsLoading(true)

    const subscribe = firestore()
      .collection<T.Gn30Props>('audios')
      .where('estudo', '==', 'Estudo 30')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => {
          const {
            titulo,
            livro,
            capitulo,
            descricao,
            playlist,
            estudo,
            imagBookItem,
            imagBookPlayer,
            tema,
            time,
            url
          } = doc.data()
          return {
            id: doc.id,
            titulo,
            livro,
            capitulo,
            descricao,
            playlist,
            estudo,
            imagBookItem,
            imagBookPlayer,
            tema,
            time,
            url
          }
        })
        setAudio(data)
        setIsLoading(false)
      })
    return subscribe
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.Container>
      {isLoading ? (
        <Loading />
      ) : (
        <LinearGradient
          colors={theme.colors.gradientBlueTwo}
          style={{
            flex: 1,
            paddingHorizontal: RFPercentage(2),
            paddingVertical: RFPercentage(3),
            paddingTop: RFPercentage(10)
          }}
        >
          <S.ButtonBack onPress={() => navigator.goBack()}>
            <AntDesign name="left" size={30} color={theme.colors.white300} />
          </S.ButtonBack>

          <FlatList
            data={audio}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <S.AudioItem>
                <S.ContainerAudioItem
                  onPress={() => handleOpenDetails(item.id)}
                >
                  <Image
                    source={{ uri: item.imagBookPlayer }}
                    style={{
                      width: RFPercentage(10),
                      height: RFPercentage(10),
                      marginLeft: 5,
                      marginTop: 10
                    }}
                  />

                  <S.ContainerInf>
                    <S.Title>
                      {item.estudo} - {item.titulo}
                    </S.Title>
                    <S.Time>{item.time}m</S.Time>
                  </S.ContainerInf>
                </S.ContainerAudioItem>

                <S.Favorite>
                  <Feather
                    name="heart"
                    size={25}
                    color={theme.colors.white300}
                  />
                </S.Favorite>
              </S.AudioItem>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        </LinearGradient>
      )}
    </S.Container>
  )
}

export default Gn30

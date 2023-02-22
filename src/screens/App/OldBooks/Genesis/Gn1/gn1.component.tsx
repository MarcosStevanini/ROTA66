import React, { useState, useEffect } from 'react'

import { db } from '../../../../../services/firebaseConfig'
import {
  collection,
  getDocs,
  where,
  query,
  onSnapshot
} from 'firebase/firestore'

import firestore from '@react-native-firebase/firestore'

import { FlatList, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Loading from '../../../../../components/Loading/loading.component'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import * as S from './gn1.styles'
import * as T from './gn1.types'

const Gn1: React.FC<T.Gn1Props> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [audio, setAudio] = useState<T.Gn1Props[]>([])

  const theme = useTheme()
  const navigator = useNavigation()

  const conexAudioRef = query(
    collection(db, 'audios'),
    where('livro', '==', 'Gn'),
    where('capitulo', '==', '1A')
  )

  function handleOpenDetails(audioId: string) {
    navigator.navigate('PlayerAudio', { audioId })
  }

  useEffect(() => {
    setIsLoading(true)

    const subscribe = firestore()
      .collection<T.Gn1Props>('audios')
      .where('livro', '==', 'Gn')
      .where('capitulo', '==', '1A')
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
                    style={{ width: 56, height: 56 }}
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

export default Gn1

import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import Loading from '../../../components/Loading/loading.component'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList, Image } from 'react-native'

import * as S from './favorite.styles'
import * as T from './favorite.types'

const Favorite: React.FC<T.FavoriteProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [audio, setAudio] = useState<T.FavoriteProps[]>([])
  const [favoriteAudioIds, setFavoriteAudioIds] = useState<string[]>([])

  const favoriteAudio = audio.filter(item => favoriteAudioIds.includes(item.id))

  const theme = useTheme()
  const navigator = useNavigation()

  function handleOpenDetails(audioId: string) {
    navigator.navigate('PlayerAudio', { audioId })
  }

  useEffect(() => {
    setIsLoading(true)

    const subscribe = firestore()
      .collection<T.FavoriteProps>('audios')
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

          const isFavorite = favoriteAudioIds.includes(doc.id)

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
            url,
            isFavorite
          }
        })
        setAudio(data)
        setIsLoading(false)
      })
    return subscribe
  }, [favoriteAudioIds])

  //função para favoritar e persistir os audios
  const toggleFavorite = async (audioId: string) => {
    let newFavoriteAudioIds = [...favoriteAudioIds]

    if (favoriteAudioIds.includes(audioId)) {
      newFavoriteAudioIds = favoriteAudioIds.filter(id => id !== audioId)
    } else {
      newFavoriteAudioIds.push(audioId)
    }

    setFavoriteAudioIds(newFavoriteAudioIds)

    await AsyncStorage.setItem(
      '@favoriteAudioIds',
      JSON.stringify(newFavoriteAudioIds)
    )
  }
  useEffect(() => {
    const loadFavoriteAudioIds = async () => {
      const storedIds = await AsyncStorage.getItem('@favoriteAudioIds')
      if (storedIds) {
        setFavoriteAudioIds(JSON.parse(storedIds))
      }
    }
    loadFavoriteAudioIds()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.Container>
  
        <LinearGradient
          colors={theme.colors.gradientBlueTwo}
          style={{
            flex: 1,
            paddingHorizontal: RFPercentage(2),
            paddingVertical: RFPercentage(3.2),
            paddingTop: RFPercentage(10)
          }}
        >
          <S.ButtonBack onPress={() => navigator.goBack()}>
            <AntDesign name="left" size={30} color={theme.colors.white300} />
          </S.ButtonBack>

          <S.TitleHeader>Favoritos</S.TitleHeader>

          <FlatList
            data={favoriteAudio}
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

                <S.Favorite onPress={() => toggleFavorite(item.id)}>
                  <Feather
                    name="trash-2"
                    size={25}
                    color={
                      item.isFavorite
                        ? theme.colors.danger
                        : theme.colors.white300
                    }
                  />
                </S.Favorite>
              </S.AudioItem>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        </LinearGradient>
  
    </S.Container>
  )
}

export default Favorite

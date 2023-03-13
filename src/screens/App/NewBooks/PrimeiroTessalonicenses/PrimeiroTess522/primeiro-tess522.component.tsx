import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { LinearGradient } from 'expo-linear-gradient'
import { FlatList, Image } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'
import  Loading  from '../../../../../components/Loading/loading.component'

import * as S from './primeiro-tess522.styles';
import * as T from './primeiro-tess522.types';

const PrimeiroTess522: React.FC<T.PrimeiroTess522Props> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [audio, setAudio] = useState<T.PrimeiroTess522Props[]>([])
  const [favoriteAudioIds, setFavoriteAudioIds] = useState<string[]>([])
  const [animationDuration, setAnimationDuration] = useState(0)

  const theme = useTheme()
  const navigator = useNavigation()

  function handleOpenDetails(audioId: string) {
    navigator.navigate('PlayerAudio', { audioId })
  }

  useEffect(() => {
    setIsLoading(true)

    const subscribe = firestore()
      .collection<T.PrimeiroTess522Props>('audios')
      .where('estudo', '==', 'Estudo 522')
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
      setAnimationDuration(1500)
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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // atualiza a duração da animação para 0 após o tempo especificado
      setAnimationDuration(0)
    }, animationDuration)

    // retorna uma função para limpar o timeout se o componente for desmontado antes da animação terminar
    return () => clearTimeout(timeoutId)
  }, [animationDuration])

  if (isLoading) {
    return <Loading />
  }
  
  return (
    <S.Container>
      {animationDuration ? (
        <S.ContainerAnimationFavorite>
          <LottieView
            source={require('../../../../../assets/ok.json')}
            autoPlay
            loop
            style={{ width: 500}}
            duration={animationDuration}
          />
        </S.ContainerAnimationFavorite>
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
                      width: RFPercentage(6),
                      height: RFPercentage(6),
                      marginLeft: RFPercentage(0.8),
                      marginRight: RFPercentage(1.6)
                    }}
                  />

                  <S.ContainerInf>
                    <S.ConteinerText1>
                      <S.TitleStudy>{item.estudo} - </S.TitleStudy>
                      <S.Time>{item.time}m</S.Time>
                    </S.ConteinerText1>

                    <S.ConteinerText2>
                      <S.Title>{item.titulo}</S.Title>
                    </S.ConteinerText2>
                  </S.ContainerInf>
                </S.ContainerAudioItem>

                <S.Favorite onPress={() => toggleFavorite(item.id)}>
                  {item.isFavorite ? (
                    <AntDesign
                      name="heart"
                      size={22}
                      color={theme.colors.blue100}
                    />
                  ) : (
                    <Feather
                      name="heart"
                      size={22}
                      color={theme.colors.blue100}
                    />
                  )}
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


export default PrimeiroTess522;

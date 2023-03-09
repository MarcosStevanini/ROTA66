import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './jo.styles';
import * as T from './jo.types';

const Jo: React.FC<T.JoProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Jo'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Jo')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Jo')
      
      : [...parsedFavorites, 'Jo'] 
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
    setIsFavorite(!isCurrentlyFavorite)
   setAnimationDuration(900)

  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // atualiza a duração da animação para 0 após o tempo especificado
      setAnimationDuration(0)
    }, animationDuration)

    // retorna uma função para limpar o timeout se o componente for desmontado antes da animação terminar
    return () => clearTimeout(timeoutId)
  }, [animationDuration])

  return (
    <>
      {animationDuration ? (
        <S.ContainerAnimationFavorite>
          <LottieView
            source={require('../../../../assets/ok.json')}
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
            paddingHorizontal: RFPercentage(2.5),
            paddingVertical: RFPercentage(3),
            paddingTop: RFPercentage(10)
          }}
        >
          <S.ButtonBack onPress={() => navigator.goBack()}>
            <AntDesign name="left" size={30} color={theme.colors.white300} />
          </S.ButtonBack>

          <S.Header>
            <S.TitleHeader>Jó</S.TitleHeader>

            <S.ButtonFavorite onPress={() => handleFavoritePress()}>
              {isFavorite ? (
                <AntDesign
                  name="heart"
                  size={25}
                  color={theme.colors.blue100}
                />
              ) : (
                <Feather name="heart" size={25} color={theme.colors.blue100} />
              )}
            </S.ButtonFavorite>
          </S.Header>

          <S.Container>
            <S.CardChapter onPress={() => navigator.navigate('Jo289')}>
              <S.Number>289</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo290')}>
              <S.Number>290</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo291')}>
              <S.Number>291</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo292')}>
              <S.Number>292</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo293')}>
              <S.Number>293</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo294')}>
              <S.Number>294</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo295')}>
              <S.Number>295</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo296')}>
              <S.Number>296</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo297')}>
              <S.Number>297</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo298')}>
              <S.Number>298</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo299')}>
              <S.Number>299</S.Number>
            </S.CardChapter>

          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Jo;

import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './proverbios.styles';
import * as T from './proverbios.types';

const Proverbios: React.FC<T.ProverbiosProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Proverbios'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Proverbios')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Proverbios')
      
      : [...parsedFavorites, 'Proverbios'] 
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
            <S.TitleHeader>Provérbios</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Pv300')}>
              <S.Number>300</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv301')}>
              <S.Number>301</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv302')}>
              <S.Number>302</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv303')}>
              <S.Number>303</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv304')}>
              <S.Number>304</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv305')}>
              <S.Number>305</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv306')}>
              <S.Number>306</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv307')}>
              <S.Number>307</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv308')}>
              <S.Number>308</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv309')}>
              <S.Number>309</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv310')}>
              <S.Number>310</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv311')}>
              <S.Number>311</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Pv312')}>
              <S.Number>312</S.Number>
            </S.CardChapter>

     
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Proverbios;

import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './isaias.styles';
import * as T from './isaias.types';

const Isaias: React.FC<T.IsaiasProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Isaías'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Isaías')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Isaías')
      
      : [...parsedFavorites, 'Isaías'] 
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
            paddingHorizontal: RFPercentage(2),
            paddingVertical: RFPercentage(3),
            paddingTop: RFPercentage(10)
          }}
        >
          <S.ButtonBack onPress={() => navigator.goBack()}>
            <AntDesign name="left" size={30} color={theme.colors.white300} />
          </S.ButtonBack>

          <S.Header>
            <S.TitleHeader>Isaías</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Isa348')}>
              <S.Number>348</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa349')}>
              <S.Number>349</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa350')}>
              <S.Number>350</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa351')}>
              <S.Number>351</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa352')}>
              <S.Number>352</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa353')}>
              <S.Number>353</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa354')}>
              <S.Number>354</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa355')}>
              <S.Number>355</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa356')}>
              <S.Number>356</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa357')}>
              <S.Number>357</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa358')}>
              <S.Number>358</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa359')}>
              <S.Number>359</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa360')}>
              <S.Number>360</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa361')}>
              <S.Number>361</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa362')}>
              <S.Number>362</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa363')}>
              <S.Number>363</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa364')}>
              <S.Number>364</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isa365')}>
              <S.Number>365</S.Number>
            </S.CardChapter>

          
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Isaias;

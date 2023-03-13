import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './primeiro-timoteo.styles';
import * as T from './primeiro-timoteo.types';

const PrimeiroTimoteo: React.FC<T.PrimeiroTimoteoProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Primeiro Timóteo'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Primeiro Timóteo')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Primeiro Timóteo')
      
      : [...parsedFavorites, 'Primeiro Timóteo'] 
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
            <S.TitleHeader>Primeiro Timóteo</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('PrimeiroTim511')}>
              <S.Number>511</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroTim512')}>
              <S.Number>512</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroTim513')}>
              <S.Number>513</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroTim514')}>
              <S.Number>514</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroTim515')}>
              <S.Number>515</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroTim516')}>
              <S.Number>516</S.Number>
            </S.CardChapter>

                        
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default PrimeiroTimoteo;

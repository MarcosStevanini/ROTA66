import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './daniel.styles';
import * as T from './daniel.types';

const Daniel: React.FC<T.DanielProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Daniel'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Daniel')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Daniel')
      
      : [...parsedFavorites, 'Daniel'] 
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
            <S.TitleHeader>Daniel</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Dn386')}>
              <S.Number>386</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Dn387')}>
              <S.Number>387</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Dn388')}>
              <S.Number>388</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Dn389')}>
              <S.Number>389</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Dn390')}>
              <S.Number>390</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Dn391')}>
              <S.Number>391</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Dn392')}>
              <S.Number>392</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Dn393')}>
              <S.Number>393</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Dn394')}>
              <S.Number>394</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Dn395')}>
              <S.Number>395</S.Number>
            </S.CardChapter>

         
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Daniel;

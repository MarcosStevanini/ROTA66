import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './jeremias.styles';
import * as T from './jeremias.types';

const Jeremias: React.FC<T.JeremiasProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Jeremias'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Jeremias')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Jeremias')
      
      : [...parsedFavorites, 'Jeremias'] 
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
            <S.TitleHeader>Jeremias</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Jer370')}>
              <S.Number>370</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer371')}>
              <S.Number>371</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer372')}>
              <S.Number>372</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer373')}>
              <S.Number>373</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer374')}>
              <S.Number>374</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer375')}>
              <S.Number>375</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer376')}>
              <S.Number>376</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer377')}>
              <S.Number>377</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer378')}>
              <S.Number>378</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer379')}>
              <S.Number>379</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer380')}>
              <S.Number>380</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer381')}>
              <S.Number>381</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer382')}>
              <S.Number>382</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer383')}>
              <S.Number>383</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jer384')}>
              <S.Number>384</S.Number>
            </S.CardChapter>

               </S.Container>
        </LinearGradient>
      )}
    </>
  )
}
export default Jeremias;

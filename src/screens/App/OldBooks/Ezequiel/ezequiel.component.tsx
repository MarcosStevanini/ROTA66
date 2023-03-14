import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './ezequiel.styles';
import * as T from './ezequiel.types';

const Ezequiel: React.FC<T.EzequielProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Ezequiel'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Ezequiel')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Ezequiel')
      
      : [...parsedFavorites, 'Ezequiel'] 
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
            <S.TitleHeader>Ezequiel</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Eze396')}>
              <S.Number>396</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze397')}>
              <S.Number>397</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze398')}>
              <S.Number>398</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze399')}>
              <S.Number>399</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze400')}>
              <S.Number>400</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze401')}>
              <S.Number>401</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze402')}>
              <S.Number>402</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze403')}>
              <S.Number>403</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze404')}>
              <S.Number>404</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze405')}>
              <S.Number>405</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze406')}>
              <S.Number>406</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze407')}>
              <S.Number>407</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eze408')}>
              <S.Number>408</S.Number>
            </S.CardChapter>

         
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Ezequiel;

import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './joao.styles';
import * as T from './joao.types';

const Joao: React.FC<T.JoaoProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('João'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('João')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'João')
      
      : [...parsedFavorites, 'João'] 
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
            <S.TitleHeader>João</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Jo471')}>
              <S.Number>471</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo472')}>
              <S.Number>472</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo473')}>
              <S.Number>473</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo474')}>
              <S.Number>474</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo475')}>
              <S.Number>475</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo476')}>
              <S.Number>476</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo477')}>
              <S.Number>477</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo478')}>
              <S.Number>478</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo479')}>
              <S.Number>479</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo480')}>
              <S.Number>480</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo481')}>
              <S.Number>481</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo482')}>
              <S.Number>482</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo483')}>
              <S.Number>483</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo484')}>
              <S.Number>484</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo485')}>
              <S.Number>485</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo486')}>
              <S.Number>486</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo487')}>
              <S.Number>487</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo488')}>
              <S.Number>488</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo489')}>
              <S.Number>489</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jo490')}>
              <S.Number>490</S.Number>
            </S.CardChapter>

      
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}


export default Joao;

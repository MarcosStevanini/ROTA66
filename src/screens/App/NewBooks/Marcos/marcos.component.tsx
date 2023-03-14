import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './marcos.styles';
import * as T from './marcos.types';

const Marcos: React.FC<T.MarcosProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Marcos'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Marcos')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Marcos')
      
      : [...parsedFavorites, 'Marcos'] 
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
            <S.TitleHeader>Marcos</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Mc458')}>
              <S.Number>458</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc459')}>
              <S.Number>459</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc460')}>
              <S.Number>460</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc461')}>
              <S.Number>461</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc462')}>
              <S.Number>462</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc463')}>
              <S.Number>463</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc464')}>
              <S.Number>464</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc465')}>
              <S.Number>465</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc466')}>
              <S.Number>466</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc467')}>
              <S.Number>467</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc468')}>
              <S.Number>468</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc469')}>
              <S.Number>469</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mc470')}>
              <S.Number>470</S.Number>
            </S.CardChapter>

      
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Marcos;

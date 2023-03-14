import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './apocalipse.styles';
import * as T from './apocalipse.types';

const Apocalipse: React.FC<T.ApocalipseProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Apocalipse'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Apocalipse')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Apocalipse')
      
      : [...parsedFavorites, 'Apocalipse'] 
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
            <S.TitleHeader>Apocalipse</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Apoc597')}>
              <S.Number>597</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc598')}>
              <S.Number>598</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc599')}>
              <S.Number>599</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc600')}>
              <S.Number>600</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc601')}>
              <S.Number>601</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc602')}>
              <S.Number>602</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc603')}>
              <S.Number>603</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc604')}>
              <S.Number>604</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc605')}>
              <S.Number>605</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc606')}>
              <S.Number>606</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc607')}>
              <S.Number>607</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc608')}>
              <S.Number>608</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc609')}>
              <S.Number>609</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc610')}>
              <S.Number>610</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc611')}>
              <S.Number>611</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc612')}>
              <S.Number>612</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apoc613')}>
              <S.Number>613</S.Number>
            </S.CardChapter>

            
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Apocalipse;

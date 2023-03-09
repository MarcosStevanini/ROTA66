import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './segundo-cronicas.styles';
import * as T from './segundo-cronicas.types';

const SegundoCronicas: React.FC<T.SegundoCronicasProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Segundo Cronicas'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Segundo Cronicas')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Segundo Cronicas')
      
      : [...parsedFavorites, 'Segundo Cronicas'] 
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
            <S.TitleHeader>Segundo Crônicas</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('SegundoCr327')}>
              <S.Number>327</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoCr328')}>
              <S.Number>328</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoCr329')}>
              <S.Number>329</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoCr330')}>
              <S.Number>330</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoCr331')}>
              <S.Number>331</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoCr332')}>
              <S.Number>332</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoCr333')}>
              <S.Number>333</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoCr334')}>
              <S.Number>334</S.Number>
            </S.CardChapter>

           
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default SegundoCronicas;

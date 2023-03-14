import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './lucas.styles';
import * as T from './lucas.types';

const Lucas: React.FC<T.LucasProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Lucas'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Lucas')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Lucas')
      
      : [...parsedFavorites, 'Lucas'] 
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
            <S.TitleHeader>Lucas</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Lc556')}>
              <S.Number>556</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc557')}>
              <S.Number>557</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc558')}>
              <S.Number>558</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc559')}>
              <S.Number>559</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc560')}>
              <S.Number>560</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc561')}>
              <S.Number>561</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc562')}>
              <S.Number>562</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc563')}>
              <S.Number>563</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc564')}>
              <S.Number>564</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc565')}>
              <S.Number>565</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc566')}>
              <S.Number>566</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc567')}>
              <S.Number>567</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc568')}>
              <S.Number>568</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc569')}>
              <S.Number>569</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc570')}>
              <S.Number>570</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc571')}>
              <S.Number>571</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc572')}>
              <S.Number>572</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc573')}>
              <S.Number>573</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc574')}>
              <S.Number>574</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc575')}>
              <S.Number>575</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lc576')}>
              <S.Number>576</S.Number>
            </S.CardChapter>

        
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Lucas;

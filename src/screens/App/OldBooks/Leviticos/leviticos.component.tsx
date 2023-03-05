import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './leviticos.styles'
import * as T from './leviticos.types'

const Leviticos: React.FC<T.LeviticosProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Levitico'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]'
    const parsedFavorites = JSON.parse(favorites)

    const isCurrentlyFavorite = parsedFavorites.includes('Levitico')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Levitico')
      : [...parsedFavorites, 'Levitico']
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
            style={{ width: 500 }}
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
            <S.TitleHeader>Levítico</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Lv75')}>
              <S.Number>75</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lv76')}>
              <S.Number>76</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lv77')}>
              <S.Number>77</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lv78')}>
              <S.Number>78</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lv79')}>
              <S.Number>79</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lv80')}>
              <S.Number>80</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lv81')}>
              <S.Number>81</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lv82')}>
              <S.Number>82</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lv83')}>
              <S.Number>83</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lv84')}>
              <S.Number>84</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lv85')}>
              <S.Number>85</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lv86')}>
              <S.Number>86</S.Number>
            </S.CardChapter>
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Leviticos

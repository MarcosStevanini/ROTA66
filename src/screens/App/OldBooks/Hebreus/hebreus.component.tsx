import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'
import * as S from './hebreus.styles'
import * as T from './hebreus.types'

const Hebreus: React.FC<T.HebreusProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Hebreus'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]'
    const parsedFavorites = JSON.parse(favorites)

    const isCurrentlyFavorite = parsedFavorites.includes('Hebreus')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Hebreus')
      : [...parsedFavorites, 'Hebreus']
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
            <S.TitleHeader>Hebreus</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Hb87')}>
              <S.Number>87</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hb88')}>
              <S.Number>88</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hb89')}>
              <S.Number>89</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hb90')}>
              <S.Number>90</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hb91')}>
              <S.Number>91</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hb92')}>
              <S.Number>92</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hb93')}>
              <S.Number>93</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hb94')}>
              <S.Number>94</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hb95')}>
              <S.Number>95</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hb96')}>
              <S.Number>96</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hb97')}>
              <S.Number>97</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hb98')}>
              <S.Number>98</S.Number>
            </S.CardChapter>
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Hebreus

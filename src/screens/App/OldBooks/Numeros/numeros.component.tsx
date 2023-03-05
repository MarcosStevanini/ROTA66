import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './numeros.styles'
import * as T from './numeros.types'

const Numeros: React.FC<T.NumerosProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Numeros'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]'
    const parsedFavorites = JSON.parse(favorites)

    const isCurrentlyFavorite = parsedFavorites.includes('Numeros')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Numeros')
      : [...parsedFavorites, 'Numeros']
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
            <S.TitleHeader>Números</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Num99')}>
              <S.Number>99</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num100')}>
              <S.Number>100</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num101')}>
              <S.Number>101</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num102')}>
              <S.Number>102</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num103')}>
              <S.Number>103</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num104')}>
              <S.Number>104</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num105')}>
              <S.Number>105</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num106')}>
              <S.Number>106</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num107')}>
              <S.Number>107</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num108')}>
              <S.Number>108</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num109')}>
              <S.Number>109</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num110')}>
              <S.Number>110</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num111')}>
              <S.Number>111</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num112')}>
              <S.Number>112</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num113')}>
              <S.Number>113</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Num114')}>
              <S.Number>114</S.Number>
            </S.CardChapter>
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}
export default Numeros

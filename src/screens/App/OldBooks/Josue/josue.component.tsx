import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './josue.styles'
import * as T from './josue.types'

const Josue: React.FC<T.JosueProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Josue'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]'
    const parsedFavorites = JSON.parse(favorites)

    const isCurrentlyFavorite = parsedFavorites.includes('Josue')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Josue')
      : [...parsedFavorites, 'Josue']
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
            <S.TitleHeader>Josué</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Jos144')}>
              <S.Number>144</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jos145')}>
              <S.Number>145</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jos146')}>
              <S.Number>146</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jos147')}>
              <S.Number>147</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jos148')}>
              <S.Number>148</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jos149')}>
              <S.Number>149</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jos150')}>
              <S.Number>150</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jos151')}>
              <S.Number>151</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jos152')}>
              <S.Number>152</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jos153')}>
              <S.Number>153</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jos154')}>
              <S.Number>154</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jos155')}>
              <S.Number>155</S.Number>
            </S.CardChapter>
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Josue

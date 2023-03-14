import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './primeiro-samuel.styles';
import * as T from './primeiro-samuel.types';

const PrimeiroSamuel: React.FC<T.PrimeiroSamuelProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Primeiro Samuel'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Primeiro Samuel')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Primeiro Samuel')
      
      : [...parsedFavorites, 'Primeiro Samuel'] 
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
            <S.TitleHeader>Primeiro Samuel</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam172')}>
              <S.Number>172</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam173')}>
              <S.Number>173</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam174')}>
              <S.Number>174</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam175')}>
              <S.Number>175</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam176')}>
              <S.Number>176</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam177')}>
              <S.Number>177</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam178')}>
              <S.Number>178</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam179')}>
              <S.Number>179</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam180')}>
              <S.Number>180</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam181')}>
              <S.Number>181</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam182')}>
              <S.Number>182</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam183')}>
              <S.Number>183</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam184')}>
              <S.Number>184</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam185')}>
              <S.Number>185</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam186')}>
              <S.Number>186</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam187')}>
              <S.Number>187</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam188')}>
              <S.Number>188</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam189')}>
              <S.Number>189</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam190')}>
              <S.Number>190</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroSam191')}>
              <S.Number>191</S.Number>
            </S.CardChapter>


           
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default PrimeiroSamuel;

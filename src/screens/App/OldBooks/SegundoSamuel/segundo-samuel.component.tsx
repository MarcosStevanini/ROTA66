import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './segundo-samuel.styles';
import * as T from './segundo-samuel.types';

const SegundoSamuel: React.FC<T.SegundoSamuelProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Segundo Samuel'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Segundo Samuel')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Segundo Samuel')
      
      : [...parsedFavorites, 'Segundo Samuel'] 
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
            <S.TitleHeader>Segundo Samuel</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('SegundoSam192')}>
              <S.Number>192</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam193')}>
              <S.Number>193</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam194')}>
              <S.Number>194</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam195')}>
              <S.Number>195</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam196')}>
              <S.Number>196</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam197')}>
              <S.Number>197</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam198')}>
              <S.Number>198</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam199')}>
              <S.Number>199</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam200')}>
              <S.Number>200</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam201')}>
              <S.Number>201</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam202')}>
              <S.Number>202</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam203')}>
              <S.Number>203</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam204')}>
              <S.Number>204</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam205')}>
              <S.Number>205</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam206')}>
              <S.Number>206</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoSam207')}>
              <S.Number>207</S.Number>
            </S.CardChapter>

          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default SegundoSamuel;

import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './segundo-reis.styles';
import * as T from './segundo-reis.types';

const SegundoReis: React.FC<T.SegundoReisProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Segundo Reis'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Segundo Reis')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Segundo Reis')
      
      : [...parsedFavorites, 'Segundo Reis'] 
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
            <S.TitleHeader>Segundo Reis</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('SegundoRe279')}>
              <S.Number>279</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoRe280')}>
              <S.Number>280</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoRe281')}>
              <S.Number>281</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoRe282')}>
              <S.Number>282</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoRe283')}>
              <S.Number>283</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoRe284')}>
              <S.Number>284</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoRe285')}>
              <S.Number>285</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoRe286')}>
              <S.Number>286</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoRe287')}>
              <S.Number>287</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('SegundoRe288')}>
              <S.Number>288</S.Number>
            </S.CardChapter>

          
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default SegundoReis;

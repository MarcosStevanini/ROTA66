import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'
import * as S from './primeiro-reis.styles';
import * as T from './primeiro-reis.types';

const PrimeiroReis: React.FC<T.PrimeiroReisProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Primeiro Reis'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Primeiro Reis')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Primeiro Reis')
      
      : [...parsedFavorites, 'Primeiro Reis'] 
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
            <S.TitleHeader>Primeiro Reis</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe267')}>
              <S.Number>267</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe268')}>
              <S.Number>268</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe269')}>
              <S.Number>269</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe270')}>
              <S.Number>270</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe271')}>
              <S.Number>271</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe272')}>
              <S.Number>272</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe273')}>
              <S.Number>273</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe274')}>
              <S.Number>274</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe275')}>
              <S.Number>275</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe276')}>
              <S.Number>276</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe277')}>
              <S.Number>277</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('PrimeiroRe278')}>
              <S.Number>278</S.Number>
            </S.CardChapter>

          
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default PrimeiroReis;

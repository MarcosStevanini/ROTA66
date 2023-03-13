import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'
import * as S from './mateus.styles';
import * as T from './mateus.types';

const Mateus: React.FC<T.MateusProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Mateus'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Mateus')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Mateus')
      
      : [...parsedFavorites, 'Mateus'] 
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
            <S.TitleHeader>Mateus</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Mt433')}>
              <S.Number>433</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt434')}>
              <S.Number>434</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt435')}>
              <S.Number>435</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt436')}>
              <S.Number>436</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt437')}>
              <S.Number>437</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt438')}>
              <S.Number>438</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt439')}>
              <S.Number>439</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt440')}>
              <S.Number>440</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt441')}>
              <S.Number>441</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt442')}>
              <S.Number>442</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt443')}>
              <S.Number>443</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt444')}>
              <S.Number>444</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt445')}>
              <S.Number>445</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt446')}>
              <S.Number>446</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt447')}>
              <S.Number>447</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt448')}>
              <S.Number>448</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt449')}>
              <S.Number>449</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt450')}>
              <S.Number>450</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt451')}>
              <S.Number>451</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt452')}>
              <S.Number>452</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt453')}>
              <S.Number>453</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt454')}>
              <S.Number>454</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt455')}>
              <S.Number>455</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt456')}>
              <S.Number>456</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Mt457')}>
              <S.Number>457</S.Number>
            </S.CardChapter>

      
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}


export default Mateus;

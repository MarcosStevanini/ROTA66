import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './atos.styles';
import * as T from './atos.types';

const Atos: React.FC<T.AtosProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Atos'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Atos')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Atos')
      
      : [...parsedFavorites, 'Atos'] 
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
            <S.TitleHeader>Atos</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('At577')}>
              <S.Number>577</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At578')}>
              <S.Number>578</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At579')}>
              <S.Number>579</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At580')}>
              <S.Number>580</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At581')}>
              <S.Number>581</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At582')}>
              <S.Number>582</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At583')}>
              <S.Number>583</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At584')}>
              <S.Number>584</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At585')}>
              <S.Number>585</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At586')}>
              <S.Number>586</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At587')}>
              <S.Number>587</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At588')}>
              <S.Number>588</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At589')}>
              <S.Number>589</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At590')}>
              <S.Number>590</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At591')}>
              <S.Number>591</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At592')}>
              <S.Number>592</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At593')}>
              <S.Number>593</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At594')}>
              <S.Number>594</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At595')}>
              <S.Number>595</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('At596')}>
              <S.Number>596</S.Number>
            </S.CardChapter>

         
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Atos;

import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './deuteronomio.styles';
import * as T from './deuteronomio.types';

const Deuteronomio: React.FC<T.DeuteronomioProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Deuteronomio'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Deuteronomio')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Deuteronomio')
      
      : [...parsedFavorites, 'Deuteronomio'] 
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
            <S.TitleHeader>Deuteronômio</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Deut121')}>
              <S.Number>121</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut122')}>
              <S.Number>122</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut123')}>
              <S.Number>123</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut124')}>
              <S.Number>124</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut125')}>
              <S.Number>125</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut126')}>
              <S.Number>126</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut127')}>
              <S.Number>127</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut128')}>
              <S.Number>128</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut129')}>
              <S.Number>129</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut130')}>
              <S.Number>130</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut131')}>
              <S.Number>131</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut132')}>
              <S.Number>132</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut133')}>
              <S.Number>133</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut134')}>
              <S.Number>134</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut135')}>
              <S.Number>135</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut136')}>
              <S.Number>136</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut137')}>
              <S.Number>137</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut138')}>
              <S.Number>138</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Deut139')}>
              <S.Number>139</S.Number>
            </S.CardChapter>

           
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Deuteronomio;

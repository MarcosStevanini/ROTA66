import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './romanos.styles'
import * as T from './romanos.types'

const Romanos: React.FC<T.RomanosProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Romanos'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]'
    const parsedFavorites = JSON.parse(favorites)

    const isCurrentlyFavorite = parsedFavorites.includes('Romanos')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Romanos')
      : [...parsedFavorites, 'Romanos']
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
            <S.TitleHeader>Romanos</S.TitleHeader>

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
            <S.CardChapter onPress={() => navigator.navigate('Rom61')}>
              <S.Number>61</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom62')}>
              <S.Number>62</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom63')}>
              <S.Number>63</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom64')}>
              <S.Number>64</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom65')}>
              <S.Number>65</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom66')}>
              <S.Number>66</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom67')}>
              <S.Number>67</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom68')}>
              <S.Number>68</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom69')}>
              <S.Number>69</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom70')}>
              <S.Number>70</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom71')}>
              <S.Number>71</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom72')}>
              <S.Number>72</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom73')}>
              <S.Number>73</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Rom74')}>
              <S.Number>74</S.Number>
            </S.CardChapter>
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}

export default Romanos

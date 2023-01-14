import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { useNavigation } from '@react-navigation/native'

import { AntDesign, Feather } from '@expo/vector-icons'

import { useTheme } from 'styled-components/native'

import * as S from './books.styles'
import * as T from './books.types'

const Books: React.FC<T.BooksProps> = () => {
  const navigator = useNavigation()
  const theme = useTheme()

  return (
    <LinearGradient
      colors={theme.colors.gradientBlueTwo}
      style={{
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 32,
        paddingTop: 100
      }}
    >
      <S.Container>
        <S.ButtonBack onPress={() => navigator.goBack()}>
          <AntDesign name="left" size={30} color={theme.colors.white300} />
        </S.ButtonBack>

        <S.TitleHeader>Livros</S.TitleHeader>

        <S.OptionsBooks>
          <S.CardOption onPress={() => navigator.navigate('OldBooks')}>
            <S.TitleCard>Velho Testamento</S.TitleCard>
          </S.CardOption>
          <S.CardOption onPress={() => navigator.navigate('NewBooks')}>
            <S.TitleCard>Novo Testamento</S.TitleCard>
          </S.CardOption>
        </S.OptionsBooks>

        <S.FavoritesHeader>
          <S.FavoritesTitle>Favoritos</S.FavoritesTitle>
          <Feather name="heart" size={25} color={theme.colors.white300} />
        </S.FavoritesHeader>

        <S.FavoritesList></S.FavoritesList>
      </S.Container>
    </LinearGradient>
  )
}

export default Books

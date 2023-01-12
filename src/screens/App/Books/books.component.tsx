import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { useNavigation } from '@react-navigation/native'

import { AntDesign, Feather } from '@expo/vector-icons'

import * as S from './books.styles'
import * as T from './books.types'

const Books: React.FC<T.BooksProps> = () => {
  const navigator = useNavigation()

  return (
    <LinearGradient
      colors={['#010A14', '#065099', '#065099']}
      style={{
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 32,
        paddingTop: 100
      }}
    >
      <S.Container>
        <S.ButtonBack onPress={() => navigator.goBack()}>
          <AntDesign name="left" size={30} color="#ffff" />
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
          <Feather name="heart" size={25} color="#ffff" />
        </S.FavoritesHeader>

        <S.FavoritesList></S.FavoritesList>
      </S.Container>
    </LinearGradient>
  )
}

export default Books

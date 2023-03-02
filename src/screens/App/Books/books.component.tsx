import React, { useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation,useFocusEffect } from '@react-navigation/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './books.styles'
import * as T from './books.types'

const Books: React.FC<T.BooksProps> = () => {
  const [favorites, setFavorites] = useState([])

  const navigator = useNavigation()
  const theme = useTheme()

  //busca os favoritos que estão persistidos
  useFocusEffect(
    React.useCallback(() => {
      const fetchFavorites = async () => {
        const storedFavorites = (await AsyncStorage.getItem('favorites')) || '[]'
        setFavorites(JSON.parse(storedFavorites))
      }
  
      fetchFavorites()
    }, [])
  )


  //funcão para remover dos favoritos o item
  const removeFavorite = async (itemToRemove) => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites !== null) {
        const favoritesArray = JSON.parse(storedFavorites);
        const newFavorites = favoritesArray.filter((item) => item !== itemToRemove);
        await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
        setFavorites(newFavorites);
      }
    } catch (error) {
      console.log('Error removing favorite: ', error);
    }
  }

  
  return (
    <LinearGradient
      colors={theme.colors.gradientBlueTwo}
      style={{
        flex: 1,
        paddingHorizontal: RFPercentage(3.2),
        paddingVertical: RFPercentage(3.2),
        paddingTop: RFPercentage(10)
      }}
    >
      <S.Container>
        <S.ButtonBack onPress={() => navigator.goBack()}>
          <AntDesign name="left" size={30} color={theme.colors.white300} />
        </S.ButtonBack>

        <S.TitleHeader>Livros</S.TitleHeader>

        <S.OptionsBooks>
          <S.CardOption onPress={() => navigator.navigate('OldBooks')}>
            <S.TitleCard>Antigo Testamento</S.TitleCard>
          </S.CardOption>
          <S.CardOption onPress={() => navigator.navigate('NewBooks')}>
            <S.TitleCard>Novo Testamento</S.TitleCard>
          </S.CardOption>
        </S.OptionsBooks>

        <S.FavoritesHeader>
          <S.FavoritesTitle>Favoritos</S.FavoritesTitle>
        </S.FavoritesHeader>

        <S.FavoritesList>
          <FlatList
            data={favorites}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity onPress={() => navigator.navigate(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeFavorite(item)}>
                  <Text>Apagar</Text>
                </TouchableOpacity>
              </>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <S.EmptyContainer>
                  <LottieView
              source={require('../../../assets/animationFavoriteScreen.json')}
              autoPlay
              loop
              style={{ width:200 }}/>
                <S.TitleEmptyList>
                  Ops, você não tem nenhum Livro favoritado!
                </S.TitleEmptyList>
              </S.EmptyContainer>
              }
          />
        </S.FavoritesList>
      </S.Container>
    </LinearGradient>
  )
}

export default Books

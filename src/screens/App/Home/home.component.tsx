import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {
  FontAwesome5,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  AntDesign
} from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

import * as S from './home.styles'
import * as T from './home.types'
import useHome from './home.hook'
import Toast from 'react-native-toast-message'

const Home: React.FC<T.HomeProps> = () => {
  const auth = useHome()
  const userName = auth.users.name

  const navigator = useNavigation()

  return (
    <LinearGradient
      colors={['#010A14', '#065099', '#065099']}
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingTop: 100
      }}
    >
      {/* PROFILE CONTENT */}
      <S.ContainerProfile>
        <S.TextProfile>Olá, {userName}</S.TextProfile>

        <S.ProfileButton
          onPress={() =>
            Toast.show({
              type: 'info',
              visibilityTime: 2000,
              text1: 'Tela de Perfil em construção',
              text2: 'Tenha paciencia, estamos fazendo o melhor para você'
            })
          }
        >
          <FontAwesome5 name="user-circle" size={24} color="#DADADA" />
        </S.ProfileButton>
      </S.ContainerProfile>

      {/* EXPLORE CONTENT */}
      <S.ContainerExplore>
        <S.TextExplore>Explore</S.TextExplore>

        <S.ContainerExploreBook
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <S.ButtonExplore onPress={() => console.log('BOOK CHAPTER OPEN')}>
            <S.TextExploreBook>Gênesis</S.TextExploreBook>
          </S.ButtonExplore>

          <S.ButtonExplore onPress={() => console.log('BOOK CHAPTER OPEN')}>
            <S.TextExploreBook>Êxodo</S.TextExploreBook>
          </S.ButtonExplore>

          <S.ButtonExplore onPress={() => console.log('BOOK CHAPTER OPEN')}>
            <S.TextExploreBook>Levítico</S.TextExploreBook>
          </S.ButtonExplore>
          <S.ButtonExplore onPress={() => console.log('BOOK CHAPTER OPEN')}>
            <S.TextExploreBook>Números</S.TextExploreBook>
          </S.ButtonExplore>
        </S.ContainerExploreBook>
        <S.ContainerButtonAllChapter
          onPress={() => navigator.navigate('ChaptersList')}
        >
          <S.TextButtonAllChapter>Ver todos</S.TextButtonAllChapter>
          <AntDesign name="arrowright" size={15} color="#BDBDBD" />
        </S.ContainerButtonAllChapter>

        {/* Search Theme */}
        <S.ContainerTheme>
          <S.TextTheme>Encontre seu tema favorito</S.TextTheme>

          <S.ContainerCardsTheme>
            <S.CardsTheme background="#FFF066">
              <S.TextCardsTheme>Dízimos e Ofertas</S.TextCardsTheme>
              {/* Icon */}
              <FontAwesome5 name="church" size={24} color="#101010" />
            </S.CardsTheme>
            <S.CardsTheme background="#5F78FF">
              <S.TextCardsTheme>Gratidão e Felicidade</S.TextCardsTheme>
              {/* Icon */}
              <FontAwesome5 name="praying-hands" size={24} color="black" />
            </S.CardsTheme>
          </S.ContainerCardsTheme>
          <S.ContainerCardsTheme>
            <S.CardsTheme background="#67FE7F">
              <S.TextCardsTheme>Sobre a Família</S.TextCardsTheme>
              {/* Icon */}
              <MaterialIcons name="family-restroom" size={24} color="#101010" />
            </S.CardsTheme>
            <S.CardsTheme background="#FF9E57">
              <S.TextCardsTheme>Palavras de Conforto</S.TextCardsTheme>
              {/* Icon */}
              <Entypo name="chat" size={24} color="#101010" />
            </S.CardsTheme>
          </S.ContainerCardsTheme>
          <S.ContainerCardsTheme>
            <S.CardsTheme background="#E1E1E1">
              <S.TextCardsTheme>União e Casamento</S.TextCardsTheme>
              {/* Icon */}
              <MaterialCommunityIcons name="church" size={24} color="#101010" />
            </S.CardsTheme>
            <S.CardsTheme background="#FF6464">
              <S.TextCardsTheme>Sobre Cura e Vida</S.TextCardsTheme>
              {/* Icon */}
              <MaterialCommunityIcons
                name="heart-pulse"
                size={24}
                color="#101010"
              />
            </S.CardsTheme>
          </S.ContainerCardsTheme>
        </S.ContainerTheme>
      </S.ContainerExplore>

      <Toast position="top" />
    </LinearGradient>
  )
}

export default Home

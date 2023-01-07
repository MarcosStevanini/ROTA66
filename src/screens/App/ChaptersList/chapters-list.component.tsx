import React from 'react'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { SvgAst } from 'react-native-svg'

import * as S from './chapters-list.styles'
import * as T from './chapters-list.types'

const ChaptersList: React.FC<T.ChaptersListProps> = () => {
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
      <S.Container>
        <S.Header>
          <S.TitleHeader>Livros</S.TitleHeader>
        </S.Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.ContainerList>
            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Gênesis</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Êxodos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Levítico</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Josué</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Juízes</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Rute</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>l Samuel</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>ll Samuel</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>l Reis</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>ll Reis</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>l Crônicas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>ll Crônicas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Esdras</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Neemias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Ester</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Jó</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Salmos</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Salmos</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Provérbios</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Eclesiastes</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Cantares</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Isaias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Jeremias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Ezequiel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Lamentações</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Daniel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Oséias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Joel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Amós</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Jonas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Obadias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Miquéias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Habacuque</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Ageu</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper></S.IconChatper>
              <S.TitleChapter>Zacarias</S.TitleChapter>
            </S.CardChapter>
          </S.ContainerList>
        </ScrollView>
      </S.Container>
    </LinearGradient>
  )
}

export default ChaptersList

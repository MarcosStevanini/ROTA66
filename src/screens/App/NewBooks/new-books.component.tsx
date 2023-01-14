import React from 'react'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { useNavigation } from '@react-navigation/native'

import Biblia from '../../../assets/biblia.svg'
import { AntDesign } from '@expo/vector-icons'

import { useTheme } from 'styled-components/native'

import * as S from './new-books.styles'
import * as T from './new-books.types'

const NewBooks: React.FC<T.NewBooksProps> = () => {
  const navigator = useNavigation()
  const theme = useTheme() 

  return (
    <LinearGradient
      colors={theme.colors.gradientBlueTwo}
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingTop: 100
      }}
    >
      <S.Container>
        <S.ButtonBack onPress={() => navigator.goBack()}>
          <AntDesign name="left" size={30} color={theme.colors.white300} />
        </S.ButtonBack>
        <S.TitleHeader>Novo testamento</S.TitleHeader>

        <ScrollView showsVerticalScrollIndicator={false}>
          <S.ContainerList>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Mateus</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Marcos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Lucas</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>João</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Atos.Apóstolos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Romanos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Coríntios I</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Coríntios II</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Gálatas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Efésios</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Filipenses</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Colossenses</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Tessalonicen.I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Tessalonicen.II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Timóteo I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Timóteo II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Tito</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Filemom</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Hebreus</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Tiago</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Pedro I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Pedro II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>João I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>João II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>João III</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Judas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Apocalipse</S.TitleChapter>
            </S.CardChapter>
          </S.ContainerList>
        </ScrollView>
      </S.Container>
    </LinearGradient>
  )
}

export default NewBooks

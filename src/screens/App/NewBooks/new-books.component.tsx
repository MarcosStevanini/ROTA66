import React from 'react'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import Biblia from '../../../assets/biblia.svg'


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
        paddingHorizontal: RFPercentage(2),
        paddingVertical: RFPercentage(3),
        paddingTop: RFPercentage(10)
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
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Mateus</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Marcos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Lucas</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Jo??o</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Atos.Ap??stolos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Romanos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Cor??ntios I</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Cor??ntios II</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>G??latas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Ef??sios</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Filipenses</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Colossenses</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Tessalonicen.I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Tessalonicen.II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Tim??teo I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Tim??teo II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Tito</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Filemom</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Hebreus</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Tiago</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Pedro I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Pedro II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Jo??o I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Jo??o II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Jo??o III</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Judas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
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

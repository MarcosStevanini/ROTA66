import React from 'react'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage,RFValue} from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import Biblia from '../../../assets/biblia.svg'

import * as S from './old-books.styles'
import * as T from './old-books.types'

const OldBooks: React.FC<T.OldBooksProps> = () => {
  
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
        <S.TitleHeader>Velho testamento</S.TitleHeader>

        <ScrollView showsVerticalScrollIndicator={false}>
          <S.ContainerList>
            <S.CardChapter onPress={() => navigator.navigate('Genesis')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Gênesis</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Êxodos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Levítico</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Números</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Deuteronômio</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Josué</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Juízes</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Rute</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Samuel I</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Samuel II</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Reis I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Reis II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Crônicas I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Crônicas II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Esdras</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Neemias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Ester</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Jó</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Salmos</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Provérbios</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Eclesiastes</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Cantares</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Isaías</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Jeremias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Ezequiel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Lamentações</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)}/>
              </S.IconChatper>
              <S.TitleChapter>Daniel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Oséias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Joel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Amós</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Jonas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Miqueias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Naum</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Habacuque</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Ageu</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Zacarias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Malaquias</S.TitleChapter>
            </S.CardChapter>
          </S.ContainerList>
        </ScrollView>
      </S.Container>
    </LinearGradient>
  )
}

export default OldBooks

import React from 'react'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { useNavigation } from '@react-navigation/native'

import Biblia from '../../../assets/biblia.svg'
import { AntDesign } from '@expo/vector-icons'

import * as S from './old-books.styles'
import * as T from './old-books.types'

const OldBooks: React.FC<T.OldBooksProps> = () => {
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
      <S.Container>
        <S.ButtonBack onPress={() => navigator.goBack()}>
          <AntDesign name="left" size={30} color="#ffff" />
        </S.ButtonBack>
        <S.TitleHeader>Velho testamento</S.TitleHeader>

        <ScrollView showsVerticalScrollIndicator={false}>
          <S.ContainerList>
            <S.CardChapter onPress={() => navigator.navigate('Genesis')}>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Gênesis</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Êxodos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Levítico</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Números</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Deuteronômio</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Josué</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Juízes</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Rute</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Samuel I</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Samuel II</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Reis I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Reis II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Crônicas I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Crônicas II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Esdras</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Neemias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Ester</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Jó</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Salmos</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Provérbios</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Eclesiastes</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Cantares</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Isaías</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Jeremias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Ezequiel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Lamentações</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Daniel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Oséias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Joel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Amós</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Jonas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Miqueias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Naum</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Habacuque</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Ageu</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
              </S.IconChatper>
              <S.TitleChapter>Zacarias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter>
              <S.IconChatper>
                <Biblia width={16} height={21} />
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

import React from 'react'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
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
        <S.TitleHeader>Antigo testamento</S.TitleHeader>

        <ScrollView showsVerticalScrollIndicator={false}>
          <S.ContainerList>
            <S.CardChapter onPress={() => navigator.navigate('Genesis')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Gênesis</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Exodo')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Êxodos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Levitico')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Levítico</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Numeros')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Números</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Deuteronomio')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Deuteronômio</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Josue')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Josué</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Juizes')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Juízes</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Rute')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Rute</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Primeiro Samuel')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Samuel I</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter  onPress={() => navigator.navigate('Segundo Samuel')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Samuel II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter  onPress={() => navigator.navigate('Primeiro Reis')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Reis I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter  onPress={() => navigator.navigate('Segundo Reis')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Reis II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter  onPress={() => navigator.navigate('Primeiro Cronicas')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Crônicas I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Segundo Cronicas')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Crônicas II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Esdras')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Esdras</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Neemias')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Neemias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ester')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Ester</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jó')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Jó</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Salmos')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Salmos</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Provérbios')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Provérbios</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Eclesiastes')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Eclesiastes</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Cantares')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Cantares</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Isaías')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Isaías</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jeremias')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Jeremias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ezequiel')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Ezequiel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Lamentações')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Lamentações</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Daniel')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Daniel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Oséias')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Oséias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Joel')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Joel</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Amós')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Amós</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Jonas')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Jonas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Miqueias')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Miqueias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Naum')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Naum</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Habacuque')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Habacuque</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ageu')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Ageu</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Zacarias')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Zacarias</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Malaquias')}>
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

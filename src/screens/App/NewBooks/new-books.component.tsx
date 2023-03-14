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
            <S.CardChapter onPress={() => navigator.navigate('Mateus')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Mateus</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Marcos')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Marcos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Lucas')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Lucas</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('João')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>João</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Atos')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Atos</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Romanos')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Romanos</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Primeiro Coríntios')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Coríntios I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Segundo Coríntios')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Coríntios II</S.TitleChapter>
            </S.CardChapter>
            <S.CardChapter onPress={() => navigator.navigate('Galatas')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Gálatas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Efésios')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Efésios</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Filipenses')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Filipenses</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Colossenses')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Colossenses</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Primeiro Tessalonicenses')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Tessalonicen.I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Segundo Tessalonicenses')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Tessalonicen.II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Primeiro Timóteo')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Timóteo I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Segundo Timóteo')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Timóteo II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Tito')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Tito</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Filemom')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Filemom</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Hebreus')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Hebreus</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Tiago')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Tiago</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Primeiro Pedro')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Pedro I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Segundo Pedro')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Pedro II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Primeiro João')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>João I</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Segundo João')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>João II</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Terceiro João')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>João III</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Judas')}>
              <S.IconChatper>
                <Biblia width={RFValue(16)} height={RFValue(21)} />
              </S.IconChatper>
              <S.TitleChapter>Judas</S.TitleChapter>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Apocalipse')}>
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

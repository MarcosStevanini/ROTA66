import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

import { useTheme } from 'styled-components/native'

import { AntDesign } from '@expo/vector-icons'

import Toast from 'react-native-toast-message'

import ImgVitorHugo from '../../../assets/ImgVitorHugo.png'
import ImgVictor from '../../../assets/ImgVictor.png'
import ImgMarcos from '../../../assets/ImgMarcos.png'
import ImgAnny from '../../../assets/ImgAnny.png'
import ImgAnderson from '../../../assets/ImgAnderson.png'

import * as S from './credits.styles'
import * as T from './credits.types'

const Credits: React.FC<T.CreditsProps> = () => {
  const navigator = useNavigation()
  const theme = useTheme()

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
        <S.Header>
          <S.ButtonBack onPress={() => navigator.goBack()}>
            <AntDesign name="left" size={30} color={theme.colors.white300} />
          </S.ButtonBack>
          <S.TitleHeader>Créditos</S.TitleHeader>
        </S.Header>
        <S.TitleInf>
          Conheça quem ajudou a desenvolver este aplicativo.
        </S.TitleInf>

        <S.ContainerDesign>
          <S.TitleProfession>Design</S.TitleProfession>
          <S.BoxDeve>
            <S.ImgPeople source={ImgVitorHugo} />
            <S.ContentInf>
              <S.Name>Vitor Hugo</S.Name>
              <S.Office>UI UX Designer</S.Office>
            </S.ContentInf>
          </S.BoxDeve>
        </S.ContainerDesign>
        <S.Line />

          <S.TitleProfession>Desenvolvedores</S.TitleProfession>
        <S.ContainerDev>
          <S.BoxDeve>
            <S.ImgPeople source={ImgMarcos} />
            <S.ContentInf>
              <S.Name>Marcos Stevanini</S.Name>
              <S.Office>Desenvolvedor Mobile</S.Office>
            </S.ContentInf>
          </S.BoxDeve>

          <S.BoxDeve>
            <S.ImgPeople source={ImgVictor} />
            <S.ContentInf>
              <S.Name>Victor Ciechovicz</S.Name>
              <S.Office>Desenvolvedor Mobile</S.Office>
            </S.ContentInf>
          </S.BoxDeve>

          <S.BoxDeve>
            <S.ImgPeople source={ImgAnny} />
            <S.ContentInf>
              <S.Name>Anny Confessor</S.Name>
              <S.Office>Desenvolvedor Mobile</S.Office>
            </S.ContentInf>
          </S.BoxDeve>

          <S.BoxDeve>
            <S.ImgPeople source={ImgAnderson} />
            <S.ContentInf>
              <S.Name>Anderson Barros</S.Name>
              <S.Office>Desenvolvedor Mobile</S.Office>
            </S.ContentInf>
          </S.BoxDeve>
        </S.ContainerDev>
      </S.Container>
    </LinearGradient>
  )
}

export default Credits

import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import Clipboard from '@react-native-clipboard/clipboard'

import {
  AntDesign,
  FontAwesome,
  Zocial,
  MaterialCommunityIcons
} from '@expo/vector-icons'

import * as S from './doacao.styles'
import * as T from './doacao.types'

const Doacao: React.FC<T.DoacaoProps> = () => {
  const navigator = useNavigation()
  const theme = useTheme()

  const pixValue = '08.802.770/0001-60'

  const copyToClipboard = () => {
    Clipboard.setString(pixValue)
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
        <S.Header>
          <S.ButtonBack onPress={() => navigator.goBack()}>
            <AntDesign name="left" size={30} color={theme.colors.white300} />
          </S.ButtonBack>
          <S.TitleHeader>Faça sua Doação</S.TitleHeader>
        </S.Header>
        <S.TitleInf>
          Ajude-nos a levar a Palavra de Deus ás outras nações. Contribua para o
          ministério Rota 66.
        </S.TitleInf>
        <S.ContainerPix>
          <S.Box onLongPress={copyToClipboard}>
            <S.Pix>PIX CNPJ: {pixValue}</S.Pix>
          </S.Box>
        </S.ContainerPix>
        <S.Obs>
          *Obs: Para as Doações se possível realizar o acrescimo de R$0,66.
        </S.Obs>
      </S.Container>
    </LinearGradient>
  )
}
export default Doacao

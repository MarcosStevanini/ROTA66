import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage} from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { auth } from '../../../services/firebaseConfig'
import Loading from '../../../components/Loading/loading.component'
import {
  AntDesign,
  FontAwesome,
  Zocial,
  MaterialCommunityIcons
} from '@expo/vector-icons'

import * as S from './themes.styles';
import * as T from './themes.types';

const Themes: React.FC<T.ThemesProps> = () => {

  const navigator = useNavigation()
  const theme = useTheme()

  return <LinearGradient
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
      <S.TitleHeader>Temas populares</S.TitleHeader>
    </S.Header>

    <S.TitleInf>Faça uma busca rápida e encontre o tema que está procurando.</S.TitleInf>

   
  </S.Container>
</LinearGradient>
}
export default Themes;

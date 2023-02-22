import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../../services/firebaseConfig'
import { useTheme } from 'styled-components/native'

import {
  AntDesign,
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Feather
} from '@expo/vector-icons'

import Toast from 'react-native-toast-message'

import User from '../../../assets/user.png'

import * as S from './profile.styles'
import * as T from './profile.types'

const Profile: React.FC<T.ProfileProps> = () => {
  const navigator = useNavigation()
  const theme = useTheme()

  const Logout = () => {
    Toast.show({
      type: 'info',
      visibilityTime: 2000,
      text1: 'Saindo da conta',
      text2: 'Estamos desconectando sua conta'
    })
    setTimeout(() => {
      auth.signOut()
    }, 2000)
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
        <S.ButtonBack onPress={() => navigator.goBack()}>
          <AntDesign name="left" size={30} color={theme.colors.white300} />
        </S.ButtonBack>
        <S.ContainerContent>
          <S.ImageUser source={User} />

          <S.ButtonConfig onPress={() => navigator.navigate('Config')}>
            <Ionicons
              name="settings-sharp"
              size={24}
              color={theme.colors.gray300}
              style={{ marginHorizontal: 16 }}
            />
            <S.TitleConfig>Configuração</S.TitleConfig>
          </S.ButtonConfig>

          <S.ButtonCreds onPress={() => navigator.navigate('Credits')}>
            <FontAwesome
              name="star"
              size={24}
              color={theme.colors.blue200}
              style={{ marginHorizontal: 16 }}
            />
            <S.TitleCreds>Créditos</S.TitleCreds>
          </S.ButtonCreds>

          <S.Line />

          <S.ButtonLogout onPress={Logout}>
            <MaterialIcons
              name="logout"
              size={24}
              color={theme.colors.danger}
              style={{ marginHorizontal: 16 }}
            />
            <S.TitleLogout>Sair</S.TitleLogout>
          </S.ButtonLogout>
          <Toast position="top" />
        </S.ContainerContent>
      </S.Container>
    </LinearGradient>
  )
}

export default Profile

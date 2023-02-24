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


import * as S from './config.styles'
import * as T from './config.types'

const Config: React.FC<T.ConfigProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState()
  const [email, setEmail] = useState<string>()

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    setIsLoading(true)

    const user = auth.currentUser
    if (user !== null) {
      const email = user.email

      setEmail(email)
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <Loading />
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
          <S.TitleHeader>Configurações</S.TitleHeader>
        </S.Header>

        <S.TitleInf>Dados pessoais</S.TitleInf>

        <S.ButtonName onPress={() => navigator.navigate('UpdateName')} >
          <FontAwesome
            name="pencil-square-o"
            size={23}
            color={theme.colors.gray300}
            style={{ marginHorizontal: 16 }}
          />
          <S.Title>Alterar nome</S.Title>
        </S.ButtonName>

        <S.ButtonEmail>
          <Zocial
            name="email"
            size={24}
            color={theme.colors.gray300}
            style={{ marginHorizontal: 16 }}
          />
          <S.Title>{email}</S.Title>
        </S.ButtonEmail>

        <S.ButtonPassword onPress={() => navigator.navigate('UpdateEmail')}>
          <MaterialCommunityIcons
            name="account-key"
            size={24}
            color={theme.colors.gray300}
            style={{ marginHorizontal: 16 }}
          />
          <S.Title>Alterar senha</S.Title>
        </S.ButtonPassword>
      </S.Container>
    </LinearGradient>
  )
}

export default Config

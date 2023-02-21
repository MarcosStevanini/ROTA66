import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../../services/firebaseConfig'

import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import Toast from 'react-native-toast-message'

import * as S from './forgotpassword.styles'
import * as T from './forgotpassword.types'

import { useTheme } from 'styled-components'

const ForgotPassword: React.FC<T.ForgotPasswordProps> = () => {
  const [email, setEmail] = useState('')

  const navigation = useNavigation()
  const theme = useTheme()

  function handleGoback() {
    navigation.goBack()
  }

  async function forgotPassword() {
    if (!email) {
      return Toast.show({
        type: 'error',
        visibilityTime: 3000,
        text1: 'Redefinir Senha',
        text2: 'Informe o e-mail...'
      })
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert(
          'Redefinir Senha',
          'Enviamos um link no seu E-mail para você redefinir sua senha.'
        )

        navigation.goBack()
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          visibilityTime: 3000,
          text1: 'Redefinir Senha',
          text2: 'Não foi possível enviar o e-mail para redefinição da senha.'
        })

        if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: 'error',
            visibilityTime: 3000,
            text1: 'E-mail inválido',
            text2: 'Informe um E-mail válido...'
          })
        }

        if (error.code === 'auth/user-not-found') {
          Toast.show({
            type: 'error',
            visibilityTime: 3000,
            text1: 'Usuário não cadastrado',
            text2: 'Informe um E-mail cadastrado...'
          })
        }
      })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={theme.colors.gradientBlueOne}
        style={{
          flex: 1,
          paddingTop: RFPercentage(10)
        }}
      >
        <S.Icon onPress={handleGoback}>
          <AntDesign name="left" size={25} color={theme.colors.white100} />
        </S.Icon>
        <S.Container>
          <S.Image
            source={require('../../../assets/logo-white.png')}
            resizeMode="contain"
          />

          <S.ContainerInput>
            <S.Input
              keyboardType="email-address"
              placeholder="Digite seu E-mail"
              placeholderTextColor={theme.colors.white400}
              value={email}
              onChangeText={e => setEmail(e)}
              style={{fontSize:16}}
            />

            <S.ButtonInput onPress={forgotPassword}>
              <S.TextButton>Enviar</S.TextButton>
            </S.ButtonInput>
          </S.ContainerInput>
        </S.Container>
        <Toast position="top" />
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default ForgotPassword

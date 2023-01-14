import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../../services/firebaseConfig'

import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import Toast from 'react-native-toast-message'

import * as S from './forgotpassword.styles'
import * as T from './forgotpassword.types'

import { useTheme } from 'styled-components'

const ForgotPassword: React.FC<T.ForgotPasswordProps> = () => {
  const [email, setEmail] = useState('')

  const navigator = useNavigation()
  const theme = useTheme()

  function handleGoback() {
    navigator.goBack()
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={theme.colors.gradientBlueOne}
        style={{
          flex: 1,
          paddingTop: 70
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
            />

            <S.ButtonInput
              onPress={() => { }}
            >
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

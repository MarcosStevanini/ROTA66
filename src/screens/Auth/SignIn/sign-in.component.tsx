import { useNavigation } from '@react-navigation/native'
import React, { useState, useMemo } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  View,
  Text
} from 'react-native'
import Toast from 'react-native-toast-message'

import { AntDesign } from '@expo/vector-icons'
import { SvgUri } from 'react-native-svg'

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../../services/firebaseConfig'

import * as S from './sign-in.styles'
import * as T from './sign-in.types'

import { useTheme } from 'styled-components'

const SignIn: React.FC<T.SignInProps> = () => {
  // const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth)
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigator = useNavigation()
  const theme = useTheme()

  if (error) {
    Toast.show({
      type: 'error',
      visibilityTime: 3000,
      text1: 'Você precisa checar seu e-mail e senha'
    })
    if (error.code === 'auth/email-already-in-use') {
      Toast.show({
        type: 'error',
        visibilityTime: 3000,
        text1: 'E-mail já cadastrado',
        text2: 'Já existi uma conta com o endereço de email fornecido.'
      })
    }
    if (error.code === 'auth/wrong-password') {
      Toast.show({
        type: 'error',
        visibilityTime: 3000,
        text1: 'Senha invalida',
        text2: 'Informe uma senha válida'
      })
    }
  }
  if (loading) {
    Toast.show({
      type: 'info',
      visibilityTime: 3000,
      text1: 'Verificando dados...',
      text2: 'Mas calma, isso só levará alguns segundos'
    })
  }

  // useMemo(() => {
  //   if (error) {
  //     Toast.show({
  //       type: 'error',
  //       visibilityTime: 3000,
  //       text1: 'Sua credencial está errada',
  //       text2: 'Informe um e-mail e uma senha validos'
  //     });
  //   }
  // }, [])
  // if (loading) {
  //   Toast.show({
  //     type: 'info',
  //     visibilityTime: 3000,
  //     text1: 'entrando',
  //   });
  // }

  const authGoogle = () => {
    Toast.show({
      type: 'info',
      visibilityTime: 3000,
      text1: 'Funcionalidade inativa',
      text2: 'Estamos em constante evolução'
    })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
        <LinearGradient
          colors={theme.colors.gradientBlueOne}
          style={{
            flex: 1,
            paddingTop: 100
          }}
        >
          <S.Container>
            <S.ContainerInput>
              <S.CreateAccountSocial onPress={() => authGoogle()}>
                <SvgUri
                  style={{ position: 'absolute', left: 15 }}
                  width="23px"
                  height="23px"
                  uri="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                />
                <S.CreateAccountTextSocial>
                  Continue com Google
                </S.CreateAccountTextSocial>
              </S.CreateAccountSocial>
              <S.CreateAccountSocial onPress={() => authGoogle()}>
                <AntDesign
                  style={{ color: '#000', position: 'absolute', left: 15 }}
                  name="apple1"
                  size={24}
                  color="black"
                />
                <S.CreateAccountTextSocial>
                  Continue com Apple
                </S.CreateAccountTextSocial>
              </S.CreateAccountSocial>
              <S.TextOr>ou</S.TextOr>
              <S.Input
                placeholder="E-mail"
                keyboardType="email-address"
                returnKeyType="join"
                placeholderTextColor={theme.colors.white400}
                value={email}
                onChangeText={e => setEmail(e)}
              />
              <S.Input
                secureTextEntry={true}
                keyboardType="numeric"
                returnKeyType="join"
                placeholder="Senha"
                placeholderTextColor={theme.colors.white400}
                value={password}
                onChangeText={e => setPassword(e)}
              />
              <S.changePassword
                onPress={() => navigator.navigate('ForgotPassword')}
              >
                <S.submitText>Esqueceu a senha?</S.submitText>
              </S.changePassword>

              <S.ButtonInput
                onPress={() => signInWithEmailAndPassword(email, password)}
              >
                {(loading && (
                  <S.TextButton>Buscando dados...</S.TextButton>
                )) || <S.TextButton>Entrar</S.TextButton>}
              </S.ButtonInput>
              <S.CreateAccount onPress={() => navigator.navigate('SignUp')}>
                <S.AccountText>Ainda nao tem acesso? </S.AccountText>
                <S.CreateAccountText>Cadastre-se</S.CreateAccountText>
              </S.CreateAccount>
            </S.ContainerInput>
          </S.Container>
          <Toast position="top" />
        </LinearGradient>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default SignIn

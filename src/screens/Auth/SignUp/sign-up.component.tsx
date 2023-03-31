import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from 'react-firebase-hooks/auth'
import { auth } from '../../../services/firebaseConfig'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import Toast from 'react-native-toast-message'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackAuth } from '../../../routes/stack.auth'
import { useTheme } from 'styled-components'
import LogoRota from '../../../assets/logo-rota.svg'

import * as S from './sign-up.styles'
import * as T from './sign-up.types'

const SignUp: React.FC<T.SignUpProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)
  const Stack = createNativeStackNavigator()

  const navigator = useNavigation()
  const theme = useTheme()

  if (error) {
    if (error.code === 'auth/email-already-in-use') {
      Toast.show({
        type: 'error',
        visibilityTime: 3000,
        text1: 'E-mail já cadastrado',
        text2: 'Já existi uma conta com o endereço de email fornecido.'
      })
    }
    if (error.code === 'auth/invalid-email') {
      Toast.show({
        type: 'error',
        visibilityTime: 3000,
        text1: 'Informe um e-mail válido',
        text2: 'O endereço de e-mail não é válido.'
      })
    }
  }

  if (loading) {
    Toast.show({
      type: 'info',
      text1: 'Verificando credenciais',
      text2: 'Aguarde enquanto estamos verificamos'
    })
  }

  if (user) return <Stack.Screen name="CreateProfile" component={StackAuth} />

  const createUser = () => {
    createUserWithEmailAndPassword(email, password)
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
        <S.Container>
          <S.ContainerLogo>
            <LogoRota width={150} height={150} />
          </S.ContainerLogo>
          <S.ContainerInput>
            <S.Input
              keyboardType="email-address"
              placeholder="E-mail"
              placeholderTextColor={theme.colors.white400}
              value={email}
              onChangeText={e => setEmail(e)}
              style={{ fontSize: 16 }}
            />
            <S.Input
              secureTextEntry={true}
              keyboardType="default"
              placeholder="Senha"
              placeholderTextColor={theme.colors.white400}
              value={password}
              onChangeText={e => setPassword(e)}
              style={{ fontSize: 16 }}
            />
            <S.Input
              secureTextEntry={true}
              keyboardType="default"
              placeholder="Confirmar Senha"
              placeholderTextColor={theme.colors.white400}
              value={confirmPassword}
              onChangeText={e => setconfirmPassword(e)}
              style={{ fontSize: 16 }}
            />

            <S.ButtonInput onPress={() => createUser()}>
              {(loading && (
                <S.TextButton>Cadastrando usuário...</S.TextButton>
              )) || <S.TextButton>Cadastre-se</S.TextButton>}
            </S.ButtonInput>

            <S.ButtonAccess onPress={() => navigator.navigate('SignIn')}>
              <S.TextQuestAccess>
                Já possui login? <S.TextAccess>Acesse</S.TextAccess>
              </S.TextQuestAccess>
            </S.ButtonAccess>
          </S.ContainerInput>
        </S.Container>
        <Toast position="top" />
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default SignUp

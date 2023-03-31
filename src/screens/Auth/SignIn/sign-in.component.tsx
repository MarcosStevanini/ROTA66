import { useNavigation } from '@react-navigation/native'
import React, { useState, useMemo } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  View,
  Text,
  TextProps
} from 'react-native'
import Toast from 'react-native-toast-message'
import { AntDesign } from '@expo/vector-icons'
import { SvgUri } from 'react-native-svg'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../../services/firebaseConfig'
import { useTheme } from 'styled-components'
import DeviceInfo from 'react-native-device-info'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import Auth from '@react-native-firebase/auth'
import LogoRota from '../../../assets/logo-rota.svg'

import * as S from './sign-in.styles'
import * as T from './sign-in.types'

type AuthResponse = {
  params: {
    access_token: string
  }
  type: string
}

export type UserProps = {
  name: string
  email: string
  picture: string
}

type Props = {
  user: UserProps
}

const SignIn: React.FC<T.SignInProps> = () => {
  const [userGoogle, setUserGoogle] = useState<UserProps>({} as UserProps)

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigator = useNavigation()
  const theme = useTheme()
  const isIOS = DeviceInfo.getSystemName() === 'iOS'

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

  GoogleSignin.configure({
    webClientId:
      '355377107221-o0tksbtvhqh3087badjt9hrcbledldtj.apps.googleusercontent.com'
  })

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    const { idToken } = await GoogleSignin.signIn()
    const googleCredential = Auth.GoogleAuthProvider.credential(idToken)
    return Auth().signInWithCredential(googleCredential)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={theme.colors.gradientBlueOne}
        style={{
          flex: 1,
          paddingTop: RFPercentage(5)
        }}
      >
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
          <S.Container>
            <S.ContainerInput>
              <S.ContainerLogo>
                <LogoRota width={150} height={150} />
              </S.ContainerLogo>
              {/*          
                      
             {isIOS && (
                <>
                  <S.CreateAccountSocial
                    onPress={() => {
                      onGoogleButtonPress
                    }}
                  >
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
                </>
              )}

              {!isIOS && (
                <S.CreateAccountSocial
                  onPress={ onGoogleButtonPress}
                >
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
              )}
              <S.TextOr>ou</S.TextOr>*/}
              <S.Input
                placeholder="E-mail"
                keyboardType="email-address"
                returnKeyType="join"
                placeholderTextColor={theme.colors.white400}
                value={email}
                onChangeText={e => setEmail(e)}
                style={{ fontSize: 16 }}
              />
              <S.Input
                secureTextEntry={true}
                keyboardType="default"
                returnKeyType="join"
                placeholder="Senha"
                placeholderTextColor={theme.colors.white400}
                value={password}
                onChangeText={e => setPassword(e)}
                style={{ fontSize: 16 }}
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
                <S.AccountText>Ainda não tem acesso? </S.AccountText>
                <S.CreateAccountText>Cadastre-se</S.CreateAccountText>
              </S.CreateAccount>
            </S.ContainerInput>
          </S.Container>
          <Toast position="top" />
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default SignIn

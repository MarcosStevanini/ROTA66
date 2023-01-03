import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { SvgUri } from 'react-native-svg'

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../../services/firebaseConfig'

import * as S from './sign-in.styles'
import * as T from './sign-in.types'

const SignIn: React.FC<T.SignInProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const navigator = useNavigation()

  if (error) {
    console.log(`E-mail ou senha incorreta`)
  }
  if (user) {
    navigator.navigate('Home')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={['#065099', '#065099', '#010A14']}
        style={{
          flex: 1,
          paddingTop: 70
        }}
      >
        <S.Container>
          <S.ContainerInput>
            <S.CreateAccountSocial>
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
            <S.CreateAccountSocial>
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
              keyboardType="email-address"
              placeholder="E-mail"
              placeholderTextColor="#BDBDBD"
              value={email}
              onChangeText={e => setEmail(e)}
            />
            <S.Input
              secureTextEntry={true}
              placeholder="Senha"
              placeholderTextColor="#BDBDBD"
              value={password}
              onChangeText={e => setPassword(e)}
            />
            <S.changePassword>
              <S.submitText>Esqueceu a senha?</S.submitText>
            </S.changePassword>

            <S.ButtonInput
              onPress={() => signInWithEmailAndPassword(email, password)}
            >
              {(loading && <S.TextButton>Buscando dados...</S.TextButton>) || (
                <S.TextButton>Entrar</S.TextButton>
              )}
            </S.ButtonInput>
            <S.AccountText>Ainda nao tem acesso?</S.AccountText>
            <S.CreateAccount onPress={() => navigator.navigate('SignUp')}>
              <S.CreateAccountText>Cadastre-se</S.CreateAccountText>
            </S.CreateAccount>
          </S.ContainerInput>
        </S.Container>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default SignIn

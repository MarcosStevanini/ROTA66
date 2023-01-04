import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'

import { SvgUri } from 'react-native-svg'
import { AntDesign } from '@expo/vector-icons'

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../../services/firebaseConfig'

import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import Toast from 'react-native-toast-message'

import * as S from './sign-up.styles'
import * as T from './sign-up.types'

const SignUp: React.FC<T.SignUpProps> = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)
  const navigator = useNavigation()

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

  if (user) {
    Toast.show({
      type: 'success',
      visibilityTime: 3000,
      text1: 'Conta criada com sucesso',
      text2: 'Seja bem-vindo! Sua conta foi criada com sucesso'
    })

    setTimeout(() => {
      navigator.navigate('SignIn')
    }, 3000)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={['#065099', '#065099', '#010A14']}
        style={{
          flex: 1,
          paddingTop: 100
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
              keyboardType="name-phone-pad"
              placeholder="Nome"
              placeholderTextColor="#BDBDBD"
              value={name}
              onChangeText={e => setName(e)}
            />
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
            <S.Input
              secureTextEntry={true}
              placeholder="Confirmar Senha"
              placeholderTextColor="#BDBDBD"
              value={confirmPassword}
              onChangeText={e => setconfirmPassword(e)}
            />

            <S.ButtonInput
              onPress={() => createUserWithEmailAndPassword(email, password)}
            >
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

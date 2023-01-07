import { useNavigation } from '@react-navigation/native';
import React, { useState, useMemo } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import Toast from 'react-native-toast-message'

import { AntDesign } from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebaseConfig';

import * as S from './sign-in.styles';
import * as T from './sign-in.types';

const SignIn: React.FC<T.SignInProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
  const navigator = useNavigation()

  useMemo(() => {
    if (error) {
      Toast.show({
        type: 'error',
        visibilityTime: 3000,
        text1: 'Sua credencial está errada',
        text2: 'Informe um e-mail e uma senha validos'
      });
    }
  }, [error])

  const authGoogle = () => {
    Toast.show({
      type: 'info',
      visibilityTime: 3000,
      text1: 'Funcionalidade inativa',
      text2: 'Estamos em constante evolução',
    })
  }
    
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
      <LinearGradient
        colors={['#065099', '#065099', '#010A14']}
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
              returnKeyType='join'
              placeholderTextColor="#BDBDBD"
              value={email}
              onChangeText={e => setEmail(e)}
             
            />
            <S.Input
              secureTextEntry={true}
              keyboardType="numeric"
              returnKeyType='join'
              placeholder="Senha"
              placeholderTextColor="#BDBDBD"
              value={password}
              onChangeText={e => setPassword(e)}
            />
            <S.changePassword
              // onPress={() => navigator.navigate('ForgotPassword')}
            >
              <S.submitText>Esqueceu a senha?</S.submitText>
            </S.changePassword>

            <S.ButtonInput
              onPress={() => signInWithEmailAndPassword(email, password)}
            >
              {(loading && <S.TextButton>Buscando dados...</S.TextButton>) || (
                <S.TextButton>Entrar</S.TextButton>
              )}
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

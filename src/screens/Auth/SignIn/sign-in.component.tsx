import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebaseConfig';

import * as S from './sign-in.styles';
import * as T from './sign-in.types';

const SignIn: React.FC<T.SignInProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigator = useNavigation();

  if (error) {
    console.log(`E-mail ou senha incorreta`);
  }
  if (user) {
    navigator.navigate('Home');
  }

  return (
    <S.Container>
      <S.Image source={require('../../../assets/logo.png')} resizeMode="cover" />

      <S.ContainerInput>
        <S.Input
          keyboardType='email-address'
          placeholder='E-mail'
          placeholderTextColor='#fff'
          value={email}
          onChangeText={e => setEmail(e)}
        />
        <S.Input
          secureTextEntry={true}
          placeholder='Senha'
          placeholderTextColor='#fff'
          value={password}
          onChangeText={e => setPassword(e)}
        />
        <S.changePassword>
          <S.submitText>Esqueceu a senha?</S.submitText>
        </S.changePassword>

        <S.ButtonInput onPress={() => signInWithEmailAndPassword(email, password)}>{loading && <S.TextButton>Buscando dados...</S.TextButton> || <S.TextButton>Entrar</S.TextButton>}</S.ButtonInput>
        <S.AccountText>Você não tem uma conta?</S.AccountText>
        <S.CreateAccount onPress={() => navigator.navigate('SignUp')}><S.CreateAccountText>Crie sua conta aqui</S.CreateAccountText></S.CreateAccount>
      </S.ContainerInput>
    </S.Container>
  )
};

export default SignIn;

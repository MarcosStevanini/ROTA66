import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebaseConfig';

import * as S from './sign-up.styles';
import * as T from './sign-up.types';

const SignIn: React.FC<T.SignUpProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const navigator = useNavigation();

  // if (error) {
  //   console.log(`E-mail ou senha incorreta`);
  // }
  // if (user) {
  //   navigator.navigate('Home');
  // }

  // const confiPassword = () => {
  //   if (confirmPassword !== password) {
  //     <S.ButtonInputDisabled><S.TextButton>ERROR</S.TextButton></S.ButtonInputDisabled>
  //   } else {
  //     <S.ButtonInput onPress={() =>
  //       createUserWithEmailAndPassword(email, password).then(
  //         () => navigator.navigate('Home')
  //     )}>
  //       {loading && <S.TextButton>Buscando dados...</S.TextButton> || <S.TextButton>Entrar</S.TextButton>}
  //     </S.ButtonInput>
  //   }
  // }

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
        <S.Input
          secureTextEntry={true}
          placeholder='Confirmar Senha'
          placeholderTextColor='#fff'
          value={confirmPassword}
          onChangeText={e => setconfirmPassword(e)}
        />

        {
          confirmPassword === password &&
          <S.ButtonInput onPress={() =>
            createUserWithEmailAndPassword(email, password).then(
              () => {
                console.log('conectando')
                navigator.navigate('Home')
              }
          ).catch(error => console.log(error))}>
            {loading && <S.TextButton>Cadastrando usuário...</S.TextButton> || <S.TextButton>Criar conta</S.TextButton>}
          </S.ButtonInput> || 
          <S.ButtonInputDisabled onPress={() => {}}>
            <S.TextButton>Credenciais erradas</S.TextButton>
          </S.ButtonInputDisabled>
        }
      </S.ContainerInput>
    </S.Container>
  )
};

export default SignIn;

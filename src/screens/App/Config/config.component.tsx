import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../../../services/firebaseConfig';
import { MaterialIcons } from '@expo/vector-icons';

import * as S from './config.styles';
import * as T from './config.types';
import Toast from 'react-native-toast-message';

const Config: React.FC<T.ConfigProps> = () => {
  const Logout  = () => {
    Toast.show({
      type: 'info',
      visibilityTime: 2000,
      text1: 'Saindo da conta',
      text2: 'Estamos desconectando sua conta',
    });
    setTimeout(() => {
      auth.signOut();
    }, 2000);
  }
  return (
    <LinearGradient
     
    colors={[ '#010A14','#065099', '#065099']}
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingTop: 100
      }}
    >
    <S.Container>
      <S.LogOut onPress={Logout}>
        <MaterialIcons name="logout" size={24} color="#333" /> 
        <S.Text>Sair</S.Text>
      </S.LogOut>
      <Toast position='top'/>
    </S.Container>
    </LinearGradient>
  );
};

export default Config;

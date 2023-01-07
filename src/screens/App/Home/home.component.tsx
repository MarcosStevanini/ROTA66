
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../services/firebaseConfig';

import { useNavigation } from '@react-navigation/native';
import Profile from '../../../components/Profile/CreateProfile.component';

import * as S from './home.styles';
import * as T from './home.types';

const Home: React.FC<T.HomeProps> = () => {
  const [user] = useAuthState(auth);
  const navigator = useNavigation();

  if (!user?.displayName) navigator.navigate('Profile');
  
  return (
    <LinearGradient
      colors={['#065099', '#065099', '#010A14']}
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
      }}
    >
      <S.Container>
        <S.Text>Olá, {user?.displayName}</S.Text>
      </S.Container>
    </LinearGradient>
  );
};

export default Home;

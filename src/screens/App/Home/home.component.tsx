import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import * as S from './home.styles';
import * as T from './home.types';

const Home: React.FC<T.HomeProps> = () => {
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
        <S.Text>Home</S.Text>
      </S.Container>
    </LinearGradient>
  );
};

export default Home;

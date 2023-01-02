import React from 'react';

import * as S from './home.styles';
import * as T from './home.types';

const Home: React.FC<T.HomeProps> = () => {
  return (
    <S.Container>
      <S.Text>Home</S.Text>
    </S.Container>
  );
};

export default Home;

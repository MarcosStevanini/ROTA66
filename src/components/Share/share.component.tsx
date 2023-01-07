import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

import * as S from './share.styles';
import * as T from './share.types';

const Share: React.FC<T.ShareProps> = () => {
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
      <S.Text>SHARE</S.Text>
    </S.Container>
    </LinearGradient>
  );
};

export default Share;

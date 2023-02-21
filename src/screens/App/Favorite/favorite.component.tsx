import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';


import * as S from './favorite.styles';
import * as T from './favorite.types';


const Favorite: React.FC<T.FavoriteProps> = () => {

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
    
  
    </S.Container>
    </LinearGradient>
  );
};

export default Favorite;

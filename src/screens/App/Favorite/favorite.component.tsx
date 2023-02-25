import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'

import * as S from './favorite.styles';
import * as T from './favorite.types';


const Favorite: React.FC<T.FavoriteProps> = () => {

  const navigator = useNavigation()
  const theme = useTheme()

  return (
    <LinearGradient
     
    colors={theme.colors.gradientBlueTwo}
      style={{
        flex: 1,
        paddingHorizontal: RFPercentage(3.2),
        paddingVertical: RFPercentage(3.2),
        paddingTop: RFPercentage(10)
      }}
    >
    <S.Container>
    <S.ButtonBack onPress={() => navigator.goBack()}>
          <AntDesign name="left" size={30} color={theme.colors.white300} />
        </S.ButtonBack>

        <S.TitleHeader>Favoritos</S.TitleHeader>
  
    </S.Container>
    </LinearGradient>
  );
};

export default Favorite;

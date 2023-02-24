import React,{useState} from 'react'
import NetInfo from '@react-native-community/netinfo';
import { ActivityIndicator } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { useTheme } from 'styled-components'
import LottieView from 'lottie-react-native';

import { Text,TouchableOpacity } from 'react-native';
import * as S from './screen-error.styles';
import * as T from './screen-error.types';

const ScreenError: React.FC<T.ScreenErrorProps> = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const theme = useTheme()


  //função para atualizar a pagina
  const refreshConnection = () => {
    setIsRefreshing(true);
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected);
      setIsRefreshing(false);
    });
  };

  return (
    <LinearGradient
      colors={theme.colors.gradientBlueOne}
      style={{
        flex: 1,
        paddingTop: 60
      }}
    >
      <S.Container>
      <LottieView
        source={require('../../assets/error.json')}
        autoPlay
        loop
        style={{ width: 300 }}
      />

   <Text >Sem conexão com a internet.</Text>

      {isRefreshing ? (
         <ActivityIndicator color={'#fff'} size={25} />
      ) : (
        <TouchableOpacity  onPress={refreshConnection}>
          <Text>Tentar novamente</Text>
        </TouchableOpacity>
      )}






       
      </S.Container>
    </LinearGradient>
  )
};

export default ScreenError;

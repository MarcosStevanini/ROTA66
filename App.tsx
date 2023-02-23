import React,{useState,useEffect} from 'react'
import Router from './src/routes'
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import Loading from './src/components/Loading/loading.component'
import NetInfo from '@react-native-community/netinfo';
import ScreenError from './src/components/ScreenError/screen-error.component'

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat'

export default function App() {
  const [isConnected, setIsConnected] = useState(true);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold
  })

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>

      {isConnected? fontsLoaded ? <Router /> : <Loading />:
        <ScreenError/>
      }
  
    </ThemeProvider>
  )
}

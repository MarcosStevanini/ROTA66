import React from 'react'
import Router from './src/routes'
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import Loading from './src/components/Loading/loading.component'


import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat'

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold
  })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Router /> : <Loading />}
    </ThemeProvider>
  )
}

import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'
import { LinearGradient } from 'expo-linear-gradient'
import LottieView from 'lottie-react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'


import * as S from './screen-error.styles'
import * as T from './screen-error.types'


const ScreenError: React.FC<T.ScreenErrorProps> = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isConnected, setIsConnected] = useState(true)
  const theme = useTheme()

  //função para atualizar a pagina
  const refreshConnection = () => {
    setIsRefreshing(true)
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected)
    })

    setTimeout(() => {
      setIsRefreshing(false)
    }, 8000)
  }

  return (
    <LinearGradient
      colors={theme.colors.gradientBlueOne}
      style={{
        flex: 1,
        paddingTop: RFPercentage(10)
      }}
    >
      <S.Container>
        <S.ContainerAnimation>
          <LottieView
            source={require('../../assets/error.json')}
            autoPlay
            loop
            style={{ width: 300 }}
          />
        </S.ContainerAnimation>

        <S.Title>Verifique sua conexão com a internet.</S.Title>

        {isRefreshing ? (
          <ActivityIndicator color={'#fff'} size={30} />
        ) : (
          <S.ButtonRefresh onPress={refreshConnection}>
            <S.TitleButton>Tente novamente!</S.TitleButton>
          </S.ButtonRefresh>
        )}
      </S.Container>
    </LinearGradient>
  )
}

export default ScreenError

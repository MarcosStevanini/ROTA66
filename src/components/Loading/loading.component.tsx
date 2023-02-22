import React from 'react'

import { ActivityIndicator } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import * as S from './loading.styles'
import * as T from './loading.types'

import { useTheme } from 'styled-components'

const Loading: React.FC<T.LoadingProps> = () => {
  const theme = useTheme()

  return (
    <LinearGradient
      colors={theme.colors.gradientBlueOne}
      style={{
        flex: 1,
        paddingTop: 60
      }}
    >
      <S.Container>
        <S.Image
          source={require('../../assets/logo-white.png')}
          resizeMode="contain"
        />
        <ActivityIndicator color={'#fff'} size={25} />
      </S.Container>
    </LinearGradient>
  )
}

export default Loading

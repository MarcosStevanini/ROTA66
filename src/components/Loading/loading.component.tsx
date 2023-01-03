import React from 'react'

import { ActivityIndicator } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import * as S from './loading.styles'
import * as T from './loading.types'

const Loading: React.FC<T.LoadingProps> = () => {
  return (
    <LinearGradient
      colors={['#065099', '#065099', '#010A14']}
      style={{
        flex: 1,
        paddingTop: 70
      }}
    >
      <S.Container>
        <S.Image
          source={require('../../assets/logo-white.png')}
          resizeMode="contain"
        />
        <ActivityIndicator color={'#fff'} size={50} />
      </S.Container>
    </LinearGradient>
  )
}

export default Loading

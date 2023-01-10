import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


import * as S from './gn1A.styles'
import * as T from './gn1A.types'

const Gn1A: React.FC<T.Gn1AProps> = () => {
  return (
    <LinearGradient
      colors={['#010A14', '#065099', '#065099']}
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
  )
}

export default Gn1A

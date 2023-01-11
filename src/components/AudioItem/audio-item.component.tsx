import React from 'react'

import * as S from './audio-item.styles'
import * as T from './audio-item.types'

import Image from '../../assets/back.png'



const AudioItem: React.FC<T.Props> = () => {
  return (
    <S.AudioItem>
      <S.Image source={Image} />

      <S.ContainerInf>
        <S.Title></S.Title>
        <S.Time></S.Time>
      </S.ContainerInf>
    </S.AudioItem>
  )
}

export default AudioItem

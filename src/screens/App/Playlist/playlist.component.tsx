import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


import * as S from './playlist.styles'
import * as T from './playlist.types'

const Playlist: React.FC<T.PlaylistProps> = () => {
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
        <S.Text>Playlist</S.Text>
      </S.Container>
    </LinearGradient>
  )
}

export default Playlist

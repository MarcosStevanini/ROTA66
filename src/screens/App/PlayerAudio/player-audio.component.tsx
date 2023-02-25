<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react'
import { useRoute } from '@react-navigation/native'
=======
/*
import React, { useState, useEffect, useRef } from 'react'
import { useRoute, useIsFocused } from '@react-navigation/native'
=======

/*
HEAD
import React, { useState, useEffect } from 'react'
=======
import React, { useState, useEffect } from 'react'
>>>>>>> e454a5226c918834c2756a87234e84195dc01dc6
>>>>>>> b7bead196140885997aeb8561e1c5e29f4ad12a5

import { TouchableOpacity } from 'react-native'
>>>>>>> 6d99697571d65047b52d4248e369e7814a508e9d

import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'

import { useTheme } from 'styled-components/native'

import firestore from '@react-native-firebase/firestore'

import Loading from '../../../components/Loading/loading.component'
import Player from '../../../components/Player/player.component'

type RouteParams = {
  audioId: string
}

import * as S from './player-audio.styles'
import * as T from './player-audio.types'

const PlayerAudio: React.FC<T.PlayerAudioProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [audio, setAudio] = useState<T.PlayerAudioProps>(
    {} as T.PlayerAudioProps
  )

  const theme = useTheme()
  const route = useRoute()
  const { audioId } = route.params as RouteParams

  useEffect(() => {
    setIsLoading(true)
    firestore()
      .collection<T.PlayerAudioProps>('audios')
      .doc(audioId)
      .get()
      .then(doc => {
        const {
          titulo,
          livro,
          capitulo,
          descricao,
          playlist,
          estudo,
          imagBookItem,
          imagBookPlayer,
          tema,
          time,
          url
        } = doc.data()

        setAudio({
          id: doc.id,
          titulo,
          livro,
          capitulo,
          descricao,
          playlist,
          estudo,
          imagBookItem,
          imagBookPlayer,
          tema,
          time,
          url
        })

        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <LinearGradient
      colors={theme.colors.gradientBlueTwo}
      style={{
        flex: 1,
        paddingHorizontal: RFPercentage(2),
        paddingVertical: RFPercentage(3),
        paddingTop: RFPercentage(10)
      }}
    >
      <S.Container>
        <Player
          Estudo={audio.estudo}
          ImagBookPlayer={audio.imagBookPlayer}
          Titulo={audio.titulo}
          audioUrl={audio.url}
        />
      </S.Container>
    </LinearGradient>
  )
}

export default PlayerAudio

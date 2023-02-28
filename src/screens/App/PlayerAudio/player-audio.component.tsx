import React, { useState, useEffect, useRef } from 'react'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components/native'
import firestore from '@react-native-firebase/firestore'
import { AntDesign } from '@expo/vector-icons'
import Loading from '../../../components/Loading/loading.component'
import Player from '../../../components/Player/player.component'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
  const navigator = useNavigation()
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
  
  useEffect(() => {
    AsyncStorage.getItem('storedAudio').then((storedAudio) => {
      if (storedAudio) {
        setAudio(JSON.parse(storedAudio))
      }
    })
  }, [])

  useEffect(() => {
    if (audio) {
      AsyncStorage.setItem('storedAudio', JSON.stringify(audio))
    }
  }, [audio])
  

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
      <S.ButtonBack onPress={() => navigator.goBack()}>
        <AntDesign name="left" size={30} color={theme.colors.white300} />
      </S.ButtonBack>
      <S.Container>
        <Player
          Estudo={audio.estudo}
          ImagBookPlayer={ audio.imagBookPlayer}
          Titulo={audio.titulo}
          audioUrl={audio.url}
        />
      </S.Container>
    </LinearGradient>
  )
}

export default PlayerAudio

import React, { useState, useEffect } from 'react'

import { TouchableOpacity } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import Slider from '@react-native-community/slider'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { useTheme } from 'styled-components/native'
import { useAudioHelper } from '../../../hooks/audio-helper'

import firestore from '@react-native-firebase/firestore'

import Loading from '../../../components/Loading/loading.component'

import Image from '../../../assets/img-livro-genesis.png'

import { useRoute, useIsFocused } from '@react-navigation/native'
import { AudiosFirestoreDTO } from '../../../DTOs/AudiosDTO'

import * as S from './player-audio.styles'
import * as T from './player-audio.types'

type RouteParams = {
  audioId: string
}

const PlayerAudio: React.FC<T.PlayerAudioProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [controlButton, setControlButton] = useState(false)
  const [audio, setAudio] = useState<T.PlayerAudioProps>(
    {} as T.PlayerAudioProps
  )
  const [urlAudio, setUrlAudio] = useState<string>('')

  const theme = useTheme()
  const route = useRoute()

  const { audioId } = route.params as RouteParams

  const player = useAudioHelper({
    listSounds: [
      {
        type: 'network',
        path: urlAudio
      }
    ],
    timeRate: 15
  })

  useEffect(() => {
    player.status === 'play' ? setControlButton(true) : setControlButton(false)
  }, [player.status])

  useEffect(() => {
    firestore()
      .collection<AudiosFirestoreDTO>('audios')
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
          imageBook,
          tema,
          time,
          url
        } = doc.data()

        setUrlAudio(url)
        setAudio({
          id: doc.id,
          titulo,
          livro,
          capitulo,
          descricao,
          playlist,
          estudo,
          imageBook,
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
      <S.ContainerPlayer>
        <S.Image source={{ uri: audio.imageBook }} />
        <S.TitlePlayer>{audio.titulo}</S.TitlePlayer>

        <S.ContainerSlider>
          <Slider
            style={{ width: 350 }}
            minimumValue={0}
            maximumValue={player.duration}
            value={player.currentTime}
            thumbTintColor={theme.colors.gray100}
            minimumTrackTintColor={theme.colors.gray100}
            maximumTrackTintColor={theme.colors.gray100}
            onTouchStart={player.pause}
            onTouchEnd={player.play}
            onSlidingComplete={seconds => player.seekToTime(seconds)}
          />
        </S.ContainerSlider>

        <S.ContainerDuration>
          <S.FirstTime>{player.currentTimeString}</S.FirstTime>
          <S.FinalTime>{player.durationString}</S.FinalTime>
        </S.ContainerDuration>

        <S.ContainerButton>
          <TouchableOpacity onPress={player.decreaseTime}>
            <S.ButtonBack name="rotate-ccw" />
          </TouchableOpacity>

          {controlButton ? (
            <TouchableOpacity onPress={player.pause}>
              <S.ButtonPause name="pause-circle" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={player.play}>
              <S.ButtonPlay name="playcircleo" />
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={player.increaseTime}>
            <S.ButtonPass name="rotate-cw" />
          </TouchableOpacity>
        </S.ContainerButton>
      </S.ContainerPlayer>
    </LinearGradient>
  )
}

export default PlayerAudio

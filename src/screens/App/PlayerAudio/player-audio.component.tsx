<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react'
import { useRoute, useIsFocused } from '@react-navigation/native'
=======

/*
HEAD
import React, { useState, useEffect } from 'react'
=======
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react'
import { useRoute, useIsFocused } from '@react-navigation/native'
=======
import React, { useState, useEffect } from 'react'
>>>>>>> 7741ddae2adbd0986947d6e350276a1ce0837e81
>>>>>>> e454a5226c918834c2756a87234e84195dc01dc6
>>>>>>> b7bead196140885997aeb8561e1c5e29f4ad12a5

import { TouchableOpacity } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { useTheme } from 'styled-components/native'
import { useAudioHelper } from '../../../hooks/audio-helper'

import firestore from '@react-native-firebase/firestore'

import Loading from '../../../components/Loading/loading.component'

import Sound from 'react-native-sound'
import Slider from '@react-native-community/slider'
import { Audio } from 'expo-av'

type RouteParams = {
  audioId: string
}

import * as S from './player-audio.styles'
import * as T from './player-audio.types'

const PlayerAudio: React.FC<T.PlayerAudioProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [controlButton, setControlButton] = useState(false)
  const [audio, setAudio] = useState<T.PlayerAudioProps>(
    {} as T.PlayerAudioProps
  )

  const theme = useTheme()
<<<<<<< HEAD

<<<<<<< HEAD

=======
  const route = useRoute()
  const { audioId } = route.params as RouteParams
>>>>>>> e454a5226c918834c2756a87234e84195dc01dc6

  useEffect(() => {
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
        setUrlAudio(url)
        setIsLoading(false)
      })
  }, [])

  const [sound, setSound] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [position, setPosition] = useState(0)
  const [duration, setDuration] = useState(0)
  const [urlAudio, setUrlAudio] = useState('')

<<<<<<< HEAD
  async function playSound() {
    if (sound) {
      await sound.playAsync()
      setIsPlaying(true)
    }
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync()
      setIsPlaying(false)
    }
  }

  useEffect(() => {
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(
        { uri: urlAudio },
        { shouldPlay: false }
      )
      setSound(sound)
=======
=======
   
  
  const player = useAudioHelper({
    listSounds: [
      {
        type: 'network',
<<<<<<< HEAD
        path: `${urlAudio}`,
        name: "nome"
=======
        path: 'url aqui',
        name:"nome"
>>>>>>> e454a5226c918834c2756a87234e84195dc01dc6
      }
    ],
    timeRate: 15
  })

  useEffect(() => {
    player.status === 'play' ? setControlButton(true) : setControlButton(false)
  }, [player.status])

>>>>>>> b7bead196140885997aeb8561e1c5e29f4ad12a5

      sound.setOnPlaybackStatusUpdate(status => {
        setPosition(status.positionMillis)
        setDuration(status.durationMillis)

        if (status.didJustFinish && !status.isLooping) {
          setIsPlaying(false)
          setPosition(0)
        }
      })
    }
    loadSound()
  }, [])

  async function increaseTime() {
    if (sound) {
      const newPosition = position + 5000 // increase 5 seconds
      await sound.setPositionAsync(Math.min(newPosition, duration))
    }
  }

  async function decreaseTime() {
    if (sound) {
      const newPosition = position - 5000 // decrease 5 seconds
      await sound.setPositionAsync(Math.max(newPosition, 0))
    }
  }

  const onSliderValueChange = value => {
    if (sound) {
      const newPosition = value * duration
      setPosition(newPosition)
      sound.setPositionAsync(newPosition)
    }
  }

  function formatDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = Math.floor(durationInSeconds % 60)
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${formattedMinutes}:${formattedSeconds}`
  }

  useEffect(() => {
    const updatePosition = async () => {
      const status = await sound.getStatusAsync()
      setPosition(status.positionMillis)
    }
    setInterval(updatePosition, 1000) // atualiza a posição a cada segundo
  }, [sound])

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
        <S.ContainerPlayer>
          <S.Image source={{ uri: audio.imagBookPlayer }} />
          <S.TitlePlayer>{audio.titulo}</S.TitlePlayer>
<<<<<<< HEAD
=======
=======
        <S.Container>
      <S.ContainerPlayer>
        <S.Image source={{ uri: audio.imagBookPlayer }} />
        <S.TitlePlayer>{audio.titulo}</S.TitlePlayer>
<<<<<<< HEAD
=======
    <S.Container>
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
              <S.Image source={Image} />
              <S.TitlePlayer>Estudo 1- titulo aqui</S.TitlePlayer>
>>>>>>> 059e1ecd14c40bf817cec02bd2bf785da3d3a4ad

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
        </S.Container>
        )
=======
>>>>>>> b7bead196140885997aeb8561e1c5e29f4ad12a5

          <S.ContainerSlider>
            <Slider
              style={{ width: 350 }}
              minimumValue={0}
              maximumValue={1}
              onValueChange={onSliderValueChange}
            />
          </S.ContainerSlider>

          <S.ContainerDuration>
            <S.FirstTime>{formatDuration(position / 1000)}</S.FirstTime>
            <S.FinalTime>{formatDuration(duration / 1000)}</S.FinalTime>
          </S.ContainerDuration>

          <S.ContainerButton>
            <TouchableOpacity onPress={decreaseTime}>
              <S.ButtonBack name="rotate-ccw" />
            </TouchableOpacity>

            {isPlaying ? (
              <TouchableOpacity onPress={pauseSound}>
                <S.ButtonPause name="pause-circle" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={playSound}>
                <S.ButtonPlay name="playcircleo" />
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={increaseTime}>
              <S.ButtonPass name="rotate-cw" />
            </TouchableOpacity>
          </S.ContainerButton>
        </S.ContainerPlayer>
      </S.Container>
    </LinearGradient>
  )
>>>>>>> e454a5226c918834c2756a87234e84195dc01dc6
}

        export default PlayerAudio
*/
import React, { useState, useEffect } from 'react'
import { Audio } from 'expo-av'
import { TouchableOpacity, View } from 'react-native'
import Slider from '@react-native-community/slider'
import AsyncStorage from '@react-native-async-storage/async-storage'

import * as S from './player.styles'
import * as T from './player.types'

const Player: React.FC<T.PlayerProps> = ({
  audioUrl,
  Estudo,
  Titulo,
  ImagBookPlayer
}) => {
  const [sound, setSound] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  async function loadAudio() {
    try {
      if (!audioUrl) {
        return
      }
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: false }
      )
      setSound(sound)
      sound.setOnPlaybackStatusUpdate(status => {
        setCurrentTime(status.positionMillis)
        setDuration(parseInt(status.durationMillis))
        if (status.didJustFinish && !status.isLooping) {
          setIsPlaying(false)
          setCurrentTime(0)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  // Função que irá tocar ou pausar o áudio
  async function playPauseAudio() {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync()
      } else {
        await sound.playAsync()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Efeito colateral que irá carregar o áudio quando o componente for montado

  useEffect(() => {
    if (!isPlaying) {
      loadAudio()
      return () => {
        if (sound) {
          sound.unloadAsync()
        }
      }
    }
  }, [audioUrl])

  async function increaseTime() {
    if (sound) {
      const newPosition = currentTime + 15000 // increase 15 seconds
      await sound.setPositionAsync(Math.min(newPosition, duration))
    }
  }

  async function decreaseTime() {
    if (sound) {
      const newPosition = currentTime - 15000 // decrease 15 seconds
      await sound.setPositionAsync(Math.max(newPosition, 0))
    }
  }

  const onSliderValueChange = value => {
    if (sound) {
      const newPosition = value * duration
      setCurrentTime(newPosition)
      sound.setPositionAsync(newPosition)
    }
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60000)
    const seconds = ((time % 60000) / 1000).toFixed(0)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <S.ContainerPlayer>
      <S.Image source={{ uri: ImagBookPlayer }} />
      <S.TitlePlayer>
        {Estudo} - {Titulo}
      </S.TitlePlayer>

      <S.ContainerSlider>
        <Slider
          style={{ width: 350 }}
          minimumValue={0}
          maximumValue={1}
          value={isNaN(currentTime / duration) ? 0 : currentTime / duration}
          onValueChange={onSliderValueChange}
        />
      </S.ContainerSlider>

      <S.ContainerDuration>
        <S.FirstTime>{formatTime(currentTime)}</S.FirstTime>
        <S.FinalTime>{formatTime(duration)}</S.FinalTime>
      </S.ContainerDuration>

      <S.ContainerButton>
        <TouchableOpacity onPress={decreaseTime}>
          <S.ButtonBack name="rotate-ccw" />
        </TouchableOpacity>

        <TouchableOpacity onPress={playPauseAudio}>
          {isPlaying ? (
            <S.ButtonPause name="pause-circle" />
          ) : (
            <S.ButtonPlay name="playcircleo" />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={increaseTime}>
          <S.ButtonPass name="rotate-cw" />
        </TouchableOpacity>
      </S.ContainerButton>
    </S.ContainerPlayer>
  )
}

export default Player

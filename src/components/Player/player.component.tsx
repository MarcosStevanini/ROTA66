import React, { useState, useEffect } from 'react'
import { Audio } from 'expo-av'
import { TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

import * as S from './player.styles'
import * as T from './player.types'

const Player: React.FC<T.PlayerProps> = ({
  audioUrl,
  Estudo,
  Titulo,
  ImagBookPlayer,
  Description
}) => {
  const [sound, setSound] = useState()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const navigation = useNavigation()
  const theme = useTheme()

  //função para carregar o audio apartir da URL

  async function loadAudio() {
    try {
      if (!audioUrl) {
        return
      }
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: true }
      )
      setIsPlaying(true)
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

  //Função para sair da tela e parar o audio
  async function goBackAndUnload() {
    sound.unloadAsync()
    navigation.goBack()
  }

  //função de encremento no tempo
  async function increaseTime() {
    if (sound) {
      const newPosition = currentTime + 15000 // increase 15 seconds
      await sound.setPositionAsync(Math.min(newPosition, duration))
    }
  }

  //função de decremento no tempo
  async function decreaseTime() {
    if (sound) {
      const newPosition = currentTime - 15000 // decrease 15 seconds
      await sound.setPositionAsync(Math.max(newPosition, 0))
    }
  }

  //função para que o usuario possa arrastar e colocar o slider em outra posição
  const onSliderValueChange = value => {
    if (sound) {
      const newPosition = value * duration
      setCurrentTime(newPosition)
      sound.setPositionAsync(newPosition)
    }
  }

  //função para formatar o time de Mils para Seg/Min
  function formatTime(time) {
    const minutes = Math.floor(time / 60000)
    const seconds = ((time % 60000) / 1000).toFixed(0)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <S.Container>
      <S.Header>
        <S.ButtonBackUp onPress={goBackAndUnload}>
          <AntDesign name="left" size={30} color={theme.colors.white300} />
        </S.ButtonBackUp>
     
      </S.Header>
      <S.ContainerPlayer>
        <S.ContainerImage>
          <S.Image source={{ uri: ImagBookPlayer }} />
        </S.ContainerImage>
        <S.ContainerTitle>
          <S.Study>{Estudo}</S.Study>
          <S.TitlePlayer>{Titulo}</S.TitlePlayer>
        </S.ContainerTitle>

        <S.ContainerSlider>
          <Slider
            style={{ width:350}}
            minimumValue={0}
            maximumValue={1}
            value={
              isNaN(currentTime / duration) || !isFinite(currentTime / duration)
                ? 0
                : currentTime / duration
            }
      
            minimumTrackTintColor={theme.colors.white100}
            maximumTrackTintColor={theme.colors.white300}
            thumbTintColor="transparent"

          />
        </S.ContainerSlider>

        <S.ContainerDuration>
          <S.FirstTime>{formatTime(currentTime)}</S.FirstTime>
          <S.FinalTime>{formatTime(duration)}</S.FinalTime>
        </S.ContainerDuration>

        <S.ContainerButton>
          <TouchableOpacity onPress={decreaseTime}>
            <S.ButtonBack name="rotate-left" />
          </TouchableOpacity>

          <S.ShapeButtonCenter >
            <TouchableOpacity onPress={playPauseAudio}>
            {isPlaying ? (
                <S.ButtonPause name="pause" />
              ) : (
                <S.ButtonPlay name="md-play" />
              )}
            </TouchableOpacity>
            
           
            
          </S.ShapeButtonCenter>

          <TouchableOpacity onPress={increaseTime}>
            <S.ButtonPass name="rotate-right" />
          </TouchableOpacity>
        </S.ContainerButton>
     <S.ContainerDescription>
      <S.TitleDescription>Descrição</S.TitleDescription>
      <S.Description>{Description}</S.Description>
     </S.ContainerDescription>
      </S.ContainerPlayer>
    </S.Container>
  )
}

export default Player

import React, { useState, useEffect, useRef } from 'react'
import { useRoute, useIsFocused } from '@react-navigation/native'

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
  const route = useRoute()
  const { audioId } = route.params as RouteParams

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
    
        setIsLoading(false)

        async function loadSound() {
          const { sound } = await Audio.Sound.createAsync(
            { uri: url },
            { shouldPlay: false }
          )
          setSound(sound)
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
      })

      
      
  }, [])

   
  
  const player = useAudioHelper({
    listSounds: [
      {
        type: 'network',
        path: 'url aqui',
        name:"nome"
      }
    ],
    timeRate: 15
  })

  useEffect(() => {
    player.status === 'play' ? setControlButton(true) : setControlButton(false)
  }, [player.status])
 



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


          <S.ContainerSlider>
            
            <Slider
              style={{ width: 350 }}
              minimumValue={0}
                       maximumValue={1}
              value={position / duration}
              onValueChange={onSliderValueChange}
            />
            
          </S.ContainerSlider>

          <S.ContainerDuration>
            <S.FirstTime></S.FirstTime>
            <S.FinalTime></S.FinalTime>
          </S.ContainerDuration>

          <S.ContainerButton>
            <TouchableOpacity onPress={decreaseTime}>
              <S.ButtonBack name="rotate-ccw" />
            </TouchableOpacity>

            {isPlaying  ? (
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
}

export default PlayerAudio

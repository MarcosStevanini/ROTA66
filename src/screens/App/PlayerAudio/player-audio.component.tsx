import  React, { useState, useEffect } from 'react'

import { TouchableOpacity } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import Slider from '@react-native-community/slider'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { useTheme } from 'styled-components/native'
import { useAudioHelper } from '../../../hooks/audio-helper'

import Loading from '../../../components/Loading/loading.component'

import Image from '../../../assets/img-livro-genesis.png'

<<<<<<< HEAD
import { useRoute, useIsFocused } from '@react-navigation/native'


=======
>>>>>>> 059e1ecd14c40bf817cec02bd2bf785da3d3a4ad
import * as S from './player-audio.styles'
import * as T from './player-audio.types'

const PlayerAudio: React.FC<T.PlayerAudioProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [controlButton, setControlButton] = useState(false)

  const theme = useTheme()

<<<<<<< HEAD
  

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

        setUrlAudio(url)
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

  const player = useAudioHelper({
    listSounds: [
      {
        type: 'network',
        path: `${urlAudio}`,
        name:"nome"
      }
    ],
    timeRate: 15
  })

  useEffect(() => {
    player.status === 'play' ? setControlButton(true) : setControlButton(false)
  }, [player.status])
 

=======
  const player = useAudioHelper({
    listSounds: [
      {
        type: 'network',
        path: 'https://storage.googleapis.com/rota66audio/rota66_019.mp3',
        name: 'Titulo do Audio'
      }
    ],
    timeRate: 15
  })

  useEffect(() => {
    player.status === 'play' ? setControlButton(true) : setControlButton(false)
  }, [player.status])

>>>>>>> 059e1ecd14c40bf817cec02bd2bf785da3d3a4ad
  if (isLoading) {
    return <Loading />
  }

  return (
<<<<<<< HEAD
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
        <S.Image source={{ uri: audio.imagBookPlayer }} />
        <S.TitlePlayer>{audio.titulo}</S.TitlePlayer>
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
}

export default PlayerAudio

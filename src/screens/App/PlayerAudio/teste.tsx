import React, { useState,useEffect } from 'react';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider'
import { Text } from 'react-native';
const AudioPlayer = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);


  async function playSound() {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

 

  useEffect(() => {
   async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
      { uri: 'https://storage.googleapis.com/rota66audio/rota66_006.mp3' },
      { shouldPlay: false }
    );
    setSound(sound);

    sound.setOnPlaybackStatusUpdate((status) => {

      setPosition(status.positionMillis);
      setDuration(status.durationMillis);

      if (status.didJustFinish && !status.isLooping) {
        setIsPlaying(false);
        setPosition(0);
      }
    });
  }
  loadSound()
  }, [])

 
  async function increaseTime() {
    if (sound) {
      const newPosition = position + 5000; // increase 5 seconds
      await sound.setPositionAsync(Math.min(newPosition, duration));
    }
  }

  async function decreaseTime() {
    if (sound) {
      const newPosition = position - 5000; // decrease 5 seconds
      await sound.setPositionAsync(Math.max(newPosition, 0));
    }
  }

  const onSliderValueChange = (value) => {
    if (sound) {
      const newPosition = value * duration;
      setPosition(newPosition);
      sound.setPositionAsync(newPosition);
    }
  };


function formatDuration(durationInSeconds) {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
}


  

  useEffect(() => {
   const updatePosition = async () => {
  const status = await sound.getStatusAsync();
  setPosition(status.positionMillis);
};
setInterval(updatePosition, 1000); // atualiza a posição a cada segundo

  }, [sound]);
 

  return (
    <>
      <Slider
        minimumValue={0}
        maximumValue={1}
        value={position / duration}
        onValueChange={onSliderValueChange}
      />
      
      
  <Text>{formatDuration(position/1000)}</Text>
    <Text>{formatDuration(duration/1000)}</Text>


      {isPlaying ? (
        <button onClick={pauseSound}>Pause</button>
      ) : (
        <button onClick={playSound}>Play</button>
      )}
  

      <button onClick={increaseTime}>+5s</button>
      <button onClick={decreaseTime}>-5s</button>
    </>
  );
};

export default AudioPlayer;
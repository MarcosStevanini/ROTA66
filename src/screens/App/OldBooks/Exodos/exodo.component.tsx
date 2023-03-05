import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign, Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LottieView from 'lottie-react-native'

import * as S from './exodo.styles';
import * as T from './exodo.types';

const Exodo: React.FC<T.ExodoProps> = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [animationDuration, setAnimationDuration] = useState(0)

  const navigator = useNavigation()
  const theme = useTheme()

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites !== null) {
        setIsFavorite(JSON.parse(storedFavorites).includes('Exodo'))
      }
    }

    fetchFavorites()
  }, [])

  const handleFavoritePress = async () => {
    const favorites = (await AsyncStorage.getItem('favorites')) || '[]' 
    const parsedFavorites = JSON.parse(favorites)


    const isCurrentlyFavorite = parsedFavorites.includes('Exodo')
    const newFavorites = isCurrentlyFavorite
      ? parsedFavorites.filter(item => item !== 'Exodo')
      
      : [...parsedFavorites, 'Exodo'] 
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
    setIsFavorite(!isCurrentlyFavorite)
   setAnimationDuration(900)

  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // atualiza a duração da animação para 0 após o tempo especificado
      setAnimationDuration(0)
    }, animationDuration)

    // retorna uma função para limpar o timeout se o componente for desmontado antes da animação terminar
    return () => clearTimeout(timeoutId)
  }, [animationDuration])

  return (
    <>
      {animationDuration ? (
        <S.ContainerAnimationFavorite>
          <LottieView
            source={require('../../../../assets/ok.json')}
            autoPlay
            loop
            style={{ width: 500}}
            duration={animationDuration}
          />
        </S.ContainerAnimationFavorite>
      ) : (
        <LinearGradient
          colors={theme.colors.gradientBlueTwo}
          style={{
            flex: 1,
            paddingHorizontal: RFPercentage(2.5),
            paddingVertical: RFPercentage(3),
            paddingTop: RFPercentage(10)
          }}
        >
          <S.ButtonBack onPress={() => navigator.goBack()}>
            <AntDesign name="left" size={30} color={theme.colors.white300} />
          </S.ButtonBack>

          <S.Header>
            <S.TitleHeader>Êxodo</S.TitleHeader>

            <S.ButtonFavorite onPress={() => handleFavoritePress()}>
              {isFavorite ? (
                <AntDesign
                  name="heart"
                  size={25}
                  color={theme.colors.blue100}
                />
              ) : (
                <Feather name="heart" size={25} color={theme.colors.blue100} />
              )}
            </S.ButtonFavorite>
          </S.Header>

          <S.Container>
            <S.CardChapter onPress={() => navigator.navigate('Ex43')}>
              <S.Number>43</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex44')}>
              <S.Number>44</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex45')}>
              <S.Number>45</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex46')}>
              <S.Number>46</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex47')}>
              <S.Number>47</S.Number>

            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex48')}>
              <S.Number>48</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex49')}>
              <S.Number>49</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex50')}>
              <S.Number>50</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex51')}>
              <S.Number>51</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex52')}>
              <S.Number>52</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex53')}>
              <S.Number>53</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex54')}>
              <S.Number>54</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex55')}>
              <S.Number>55</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex56')}>
              <S.Number>56</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex57')}>
              <S.Number>57</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex58')}>
              <S.Number>58</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex59')}>
              <S.Number>59</S.Number>
            </S.CardChapter>

            <S.CardChapter onPress={() => navigator.navigate('Ex60')}>
              <S.Number>60</S.Number>
            </S.CardChapter>

                   
          </S.Container>
        </LinearGradient>
      )}
    </>
  )
}
export default Exodo;

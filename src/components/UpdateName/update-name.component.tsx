import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage} from 'react-native-responsive-fontsize'
import { useUpdateProfile} from 'react-firebase-hooks/auth'
import { auth } from '../../services/firebaseConfig'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'


import * as S from './update-name.styles'
import * as T from './update-name.types'

const UpdateName: React.FC<T.UpdateNameProps> = () => {
  const [name, setName] = useState('')
  const [updateProfile, updating, error] = useUpdateProfile(auth)

  const navigator = useNavigation()
  const theme = useTheme()

  function handleGoback() {
    navigator.goBack()
  }


  if (error) {
    Toast.show({
      type: 'error',
      visibilityTime: 3000,
      text1: 'Você precisa nos informar seu nome',
      text2: 'Devemos saber como chama-lo'
    })
  }
  if (updating) {
    Toast.show({
      type: 'info',
      text1: 'Aguarde, estamos salvando seus dados',
      text2: 'Obrigado por nos informar os dados necessários'
    })
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={theme.colors.gradientBlueOne}
        style={{
          flex: 1,
          paddingTop: RFPercentage(10)
        }}
      >
        <S.Icon onPress={handleGoback}>
          <AntDesign name="left" size={25} color={theme.colors.white100} />
        </S.Icon>
        <S.Container>
          <S.Image
            source={require('../../assets/logo-white.png')}
            resizeMode="contain"
          />

          <S.ContainerInput>
            <S.Input
              keyboardType="email-address"
              placeholder="Digite seu nome"
              placeholderTextColor={theme.colors.white400}
              onChangeText={e => setName(e)}
            />

            <S.ButtonInput
              onPress={async () => {
                const update = {
                  displayName: name
                }
                const success = await updateProfile(update)
                success && navigator.navigate('Config')
              }}
            >
              <S.TextButton>Atualizar</S.TextButton>
            </S.ButtonInput>
          </S.ContainerInput>
        </S.Container>
        <Toast position="top" />
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default UpdateName

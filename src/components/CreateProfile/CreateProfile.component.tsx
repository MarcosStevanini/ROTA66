import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../services/firebaseConfig'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Toast from 'react-native-toast-message'

import * as S from './createProfile.styles'
import * as T from './createProfile.types'

const Profile: React.FC<T.ProfileProps> = () => {
  const [name, setName] = useState('')
  // const [phone, setPhone] = useState<any>(undefined);
  // const [photoURL, setPhotoURL] = useState('')
  const [user] = useAuthState(auth)
  const [updateProfile, updating, error] = useUpdateProfile(auth)

  

  const navigator = useNavigation()
  const theme = useTheme()

  if (user?.displayName ) navigator.navigate('TabNavigation')

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
          paddingHorizontal: RFPercentage(2),
          paddingVertical: RFPercentage(3)
        }}
      >
        <S.Container>
          <S.TextHeaderPrifile>Olá, Bem-Vindo!</S.TextHeaderPrifile>
          <S.TextSubHeaderPrifile>
            Agora conte-nos um pouco sobre você.
          </S.TextSubHeaderPrifile>
        </S.Container>
        <S.ContainerUser>
          <S.TextUser>Como deseja ser chamado:</S.TextUser>
          <S.Input
            keyboardType="name-phone-pad"
            placeholder="Nome"
            placeholderTextColor={theme.colors.white400}
            onChangeText={e => setName(e)}
          />
          {/* <S.TextUser>Telefone:</S.TextUser>
            <S.Input
              keyboardType="number-pad"
              placeholder="(xx)xxxxx-xxxx"
              placeholderTextColor={theme.colors.white400}
              onChangeText={e => setPhone(e)}
            /> */}
          <S.Button
            onPress={async () => {
              const update = {
                displayName: name
                // phoneNumber: phone,
                //photoURL: 'https://i.pravatar.cc/150'
              }
              const success = await updateProfile(update)
              success && navigator.navigate('Home')
            }}
          >
            <S.Text>Salvar</S.Text>
          </S.Button>
        </S.ContainerUser>
        <Toast position="top" />
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default Profile

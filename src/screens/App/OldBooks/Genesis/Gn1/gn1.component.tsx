import React, { useState, useEffect } from 'react'

import { db } from '../../../../../services/firebaseConfig'
import {
  collection,
  getDocs,
  where,
  query,
  onSnapshot
} from 'firebase/firestore'

import { FlatList, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Loading from '../../../../../components/Loading/loading.component'
import ImagemLivro from '../../../../../assets/img-livro-genesis.png'

import { useTheme } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

import * as S from './gn1.styles'
import * as T from './gn1.types'

const Gn1: React.FC<T.Gn1Props> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [audio, setAudio] = useState<T.Gn1Props[]>([])

  const theme = useTheme()

  const conexAudioRef = query(
    collection(db, 'audios'),
    where('livro', '==', 'Gn'),
    where('capitulo', '==', '1A')
  )

  useEffect(() => {
    setIsLoading(true)

    const Read = async () => {
      const audioSnapshot = await getDocs(conexAudioRef)
      const data = audioSnapshot.docs.map(doc => {
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
        return {
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
        }
      })
      setAudio(data)
      setIsLoading(false)
    }
    Read()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <S.Container>
      {isLoading ? (
        <Loading />
      ) : (
        <LinearGradient
          colors={['#010A14', '#065099', '#065099']}
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 30,
            paddingTop: 100
          }}
        >
          <FlatList
            data={audio}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <S.AudioItem>
                <S.ContainerAudioItem>
                  <Image
                    source={{uri:item.imageBook}}
                    style={{ width: 56, height: 56 }}
                  />

                  <S.ContainerInf>
                    <S.Title>
                      {item.estudo} - {item.titulo}
                    </S.Title>
                    <S.Time>{item.time}m</S.Time>
                  </S.ContainerInf>
                </S.ContainerAudioItem>
                
                <S.Favorite>

                <Feather name="heart" size={25} color={theme.colors.white300} />

                </S.Favorite>

              </S.AudioItem>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        </LinearGradient>
      )}
    </S.Container>
  )
}

export default Gn1

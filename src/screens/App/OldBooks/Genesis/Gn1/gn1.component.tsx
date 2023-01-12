import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


import * as S from './gn1.styles'
import * as T from './gn1.types'

import  Loading  from '../../../../../components/Loading/loading.component'


const Gn1: React.FC<T.Gn1Props> = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [audio, setAudio] = useState<T.Gn1Props[]>([])

 
  return (
    <LinearGradient
      colors={['#010A14', '#065099', '#065099']}
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingTop: 100
      }}
    >
      <S.Container>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={audio}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <S.AudioItem>
             
                <S.ContainerInf>
                  <S.Title>{item.titulo}</S.Title>
                  <S.Time>{item.time}</S.Time>
                </S.ContainerInf>
              </S.AudioItem>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        )}
      </S.Container>
    </LinearGradient>
  )
}

export default Gn1

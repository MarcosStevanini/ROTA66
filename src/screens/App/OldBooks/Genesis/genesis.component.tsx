import React, { useState } from 'react'
import { Modal, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import * as S from './genesis.styles'
import * as T from './genesis.types'

import { AntDesign, Feather } from '@expo/vector-icons'

const Genesis: React.FC<T.GenesisProps> = () => {
  const navigator = useNavigation()
  const theme = useTheme()

  return (
    <LinearGradient
      colors={theme.colors.gradientBlueTwo}
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingTop: 100
      }}
    >
      <S.ButtonBack onPress={() => navigator.goBack()}>
        <AntDesign name="left" size={30} color={theme.colors.white300} />
      </S.ButtonBack>

      <S.Header>
        <S.TitleHeader>Gênesis</S.TitleHeader>
        <S.Favorite>
          <Feather name="heart" size={23} color={theme.colors.white300} />
        </S.Favorite>
      </S.Header>

      <S.Container>
        <S.CardChapter onPress={() => navigator.navigate('Gn1')}>
          <S.Number>1</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>2</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>3</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>4</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>5</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>6</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>7</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>8</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>9</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>10</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>11</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>12</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>13</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>14</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>15</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>16</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>17</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>18</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>19</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>20</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>21</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>22</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>23</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>24</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>25</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>26</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>27</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>28</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>29</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>30</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>31</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>32</S.Number>
        </S.CardChapter>


        <S.CardChapter>
          <S.Number>33</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>34</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>35</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>36</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>37</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>38</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>39</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>40</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>41</S.Number>
        </S.CardChapter>

        <S.CardChapter>
          <S.Number>42</S.Number>
        </S.CardChapter>
      </S.Container>
    </LinearGradient>
  )
}

export default Genesis

import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage} from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

import * as S from './genesis.styles'
import * as T from './genesis.types'

const Genesis: React.FC<T.GenesisProps> = () => {
  const navigator = useNavigation()
  const theme = useTheme()

  return (
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
        <S.TitleHeader>Gênesis</S.TitleHeader>
      </S.Header>

      <S.Container>
        <S.CardChapter onPress={() => navigator.navigate('Gn1')}>
          <S.Number>1</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn2')}>
          <S.Number>2</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn3')}>
          <S.Number>3</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn4')}>
          <S.Number>4</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn5')}>
          <S.Number>5</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn6')}>
          <S.Number>6</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn7')}> 
          <S.Number>7</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn8')}>
          <S.Number>8</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn9')}> 
          <S.Number>9</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn10')}>
          <S.Number>10</S.Number>
        </S.CardChapter >

        <S.CardChapter onPress={() => navigator.navigate('Gn11')}>
          <S.Number>11</S.Number>
        </S.CardChapter>

<<<<<<< HEAD
        <S.CardChapter>
          <S.Number>11</S.Number>
        </S.CardChapter>

        <S.CardChapter>
=======
        
        <S.CardChapter onPress={() => navigator.navigate('Gn12')}>
>>>>>>> dev
          <S.Number>12</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn13')}>
          <S.Number>13</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn14')}>
          <S.Number>14</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn15')}>
          <S.Number>15</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn16')}>
          <S.Number>16</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn17')}>
          <S.Number>17</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn18')}>
          <S.Number>18</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn19')}>
          <S.Number>19</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn20')}>
          <S.Number>20</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn21')}>
          <S.Number>21</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn22')}>
          <S.Number>22</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn23')}>
          <S.Number>23</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn24')}>
          <S.Number>24</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn25')}>
          <S.Number>25</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn26')}>
          <S.Number>26</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn27')}>
          <S.Number>27</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn28')}>
          <S.Number>28</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn29')}>
          <S.Number>29</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn30')}>
          <S.Number>30</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn31')}>
          <S.Number>31</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn32')}>
          <S.Number>32</S.Number>
        </S.CardChapter>
<<<<<<< HEAD


        <S.CardChapter>
=======
        
        <S.CardChapter onPress={() => navigator.navigate('Gn33')}>
>>>>>>> dev
          <S.Number>33</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn34')}>
          <S.Number>34</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn35')}>
          <S.Number>35</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn36')}>
          <S.Number>36</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn37')}>
          <S.Number>37</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn38')}> 
          <S.Number>38</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn39')}>
          <S.Number>39</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn40')}>
          <S.Number>40</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn41')}>
          <S.Number>41</S.Number>
        </S.CardChapter>

        <S.CardChapter onPress={() => navigator.navigate('Gn42')}>
          <S.Number>42</S.Number>
        </S.CardChapter>
      </S.Container>
    </LinearGradient>
  )
}

export default Genesis

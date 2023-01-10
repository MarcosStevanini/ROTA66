import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import * as S from './genesis.styles'
import * as T from './genesis.types'

import { AntDesign } from '@expo/vector-icons'

const Genesis: React.FC<T.GenesisProps> = () => {
  const navigator = useNavigation()

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
      <S.Header>
        <S.ButtonBack onPress={() => navigator.goBack()}>
          <AntDesign name="left" size={25} color="#ffff" />
        </S.ButtonBack>
        <S.Title>Gênesis</S.Title>
      </S.Header>
      <S.Container>
        <S.CardChapter onPress={() => navigator.navigate('Gn1A')}>
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
          <S.Number>1</S.Number>
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
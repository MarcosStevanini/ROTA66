import styled from 'styled-components/native';

interface backgroundCards {
  background: string;
}

// PROFILE
export const ContainerProfile = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextProfile = styled.Text`
  color: #FFF;
  font-size: 22px;
`;
export const ProfileButton = styled.TouchableOpacity``;

// EXPLORE
export const ContainerExplore = styled.View`
  padding-top: 30px;
`;
export const TextExplore = styled.Text`
  color: #DADADA;
  font-weight: 500;
  font-size: 17px;
`;

export const ContainerExploreBook = styled.ScrollView`
  margin-top: 30px;
`;

export const TextExploreBook = styled.Text`
  color: #101010;
`;

export const ButtonExplore = styled.TouchableOpacity`
  background-color: #DADADA;
  border-radius: 25px;
  padding: 10px 30px;
  margin-left: 10px;
`;

//Button All Chapter
export const ContainerButtonAllChapter = styled.TouchableOpacity`
margin-top: 24px;
margin-bottom: 25px;
flex-direction: row;
justify-content: flex-end;
`;
export const TextButtonAllChapter = styled.Text`
font-size: 12px;
font-weight: 500;
color: ${({theme})=>theme.colors.white400};

margin-right: 8px;
`;

// Search Theme
export const ContainerTheme = styled.View`
  margin-top: 30px;
  `;

export const ContainerCardsTheme = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const TextTheme = styled.Text`
  color: #DADADA;
  font-weight: 500;
  font-size: 17px;
`;

export const CardsTheme = styled.View<backgroundCards>`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 45%;
  margin: 0 5px;
  background-color: ${({background}) => background ? background : '#FFF066'};
  padding: 28px 15px;
  border-radius: 10px;
  max-width: 100%;
`;

export const TextCardsTheme = styled.Text`
  color: #101010;
  font-weight: 500;
  max-width: 70%;
`;
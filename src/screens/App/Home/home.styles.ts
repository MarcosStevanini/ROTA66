import styled from 'styled-components/native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';

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
  font-family: ${({theme})=>theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  color: ${({theme})=>theme.colors.white100};
  font-size: ${RFValue(24)}px;
  text-transform: capitalize;
`;
export const ProfileButton = styled.TouchableOpacity``;

// EXPLORE
export const ContainerExplore = styled.View`
  padding-top: ${RFPercentage(3)}px;
`;

export const TextExplore = styled.Text`
  font-family: ${({theme})=>theme.fonts.medium};
  font-size: ${RFValue(17)}px;
  color: ${({theme})=>theme.colors.white100};
  font-size: ${RFValue(17)}px;
`;

export const ContainerExploreBook = styled.ScrollView`
  margin-top: ${RFPercentage(3)}px;
`;

export const TextExploreBook = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(12)}px;
  color: ${({theme})=>theme.colors.gray500};
`;

export const ButtonExplore = styled.TouchableOpacity`
  background-color:  ${({theme})=>theme.colors.white300};
  border-radius: 25px;
  width: ${RFPercentage(16)}px;
  height: ${RFPercentage(4.5)}px;
  
  margin-left: ${RFPercentage(2)}px;

  align-items: center;
  justify-content: center;
`;

//Button All Chapter
export const ContainerButtonAllChapter = styled.TouchableOpacity`
 flex-direction: row;
 justify-content: flex-end;
 margin-top: ${RFPercentage(2)}px;
 margin-bottom: ${RFPercentage(2.4)}px;
`;

export const TextButtonAllChapter = styled.Text`
  font-family: ${({theme})=>theme.fonts.medium};
  color: ${({theme})=>theme.colors.white400};
  font-size: ${RFValue(12)}px;
  margin-right: 8px;
`;

// Search Theme
export const ContainerTheme = styled.View`
  margin-top: ${RFPercentage(1)}px;
  `;

export const ContainerCardsTheme = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFPercentage(3)}px;
`;

export const TextTheme = styled.Text`
  font-family: ${({theme})=>theme.fonts.medium};
  color: ${({theme})=>theme.colors.white100};
  font-size: ${RFValue(17)}px;
  text-align: left;
`;

export const CardsTheme = styled.View<backgroundCards>`
  background-color: ${({background}) => background ? background : '#FFF066'};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(10)}px;
  //margin-bottom: ${RFPercentage(1)}px;
  padding: 14px 10px;
  
  border-radius: 4px;

`;

export const TextCardsTheme = styled.Text`
  font-family: ${({theme})=>theme.fonts.medium};
  color: ${({theme})=>theme.colors.gray500};
  font-size: ${RFValue(14)}px;

  
 
`;
import styled from 'styled-components/native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const Header = styled.View`
flex-direction: row;
justify-content: flex-start;
align-items: center;

`;

export const ButtonBack = styled.TouchableOpacity`
margin-bottom: 48px;

`;

export const TitleHeader = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.white200};
font-size: ${RFValue(24)}px;

margin-bottom: 36px;

`;

export const OptionsBooks = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;

margin-bottom: 64px;
`;

export const CardOption = styled.TouchableOpacity`
padding: 13px 16px;
width:${RFPercentage(21)}px;
height:${RFPercentage(10)}px; ;
background-color: ${({theme})=>theme.colors.white300};

border-radius: 4px;

justify-content: space-between;

align-items: center;

`;

export const TitleCard = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.gray500};
font-size: ${RFValue(16)}px;

text-align: center;
`;

export const FavoritesHeader = styled.View`
flex-direction: row;

margin-bottom: 10px;
align-items: center;

`;

export const FavoritesTitle = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.white200};
font-size: ${RFValue(24)}px;

margin-right: 13px;
`;

export const FavoritesList = styled.View``;

export const TitleEmptyList = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(12)}px;
color: ${({theme})=>theme.colors.white400};

margin-top: ${RFPercentage(1)}px;


`;

export const EmptyContainer = styled.View`
align-items: center;
justify-content: flex-start;


`; 

export const ContainerBookfavorite = styled.View`
width: ${RFPercentage(46)}px;
height: ${RFPercentage(8)}px;
background-color: ${({theme})=>theme.colors.gray300};

border-radius: 6px;

flex-direction: row;

justify-content: space-between;
align-items: center;

opacity: 0.8;

`;

export const ImageBookFavorite = styled.Image`
width: ${RFValue(36)}px;
height: ${RFValue(36)}px;

margin-left: ${RFPercentage(0.8)}px;
margin-right: ${RFPercentage(1.6)}px;


`;

export const BookInf = styled.View`
flex-direction: row;


`;

export const ButtonRemove =styled.TouchableOpacity`
margin-right:${RFPercentage(1.6)}px;

`;

export const ButtonIntro =styled.TouchableOpacity``;

export const TextBooks = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.white200};
font-size: ${RFValue(15)}px;


`;

export const TextBook = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.white500};
font-size: ${RFValue(11)}px;


`;

export const ContentTexts = styled.View`


`;
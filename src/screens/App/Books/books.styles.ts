import styled from 'styled-components/native';

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
font-size: 24px;
color: ${({theme})=>theme.colors.white200};

margin-bottom: 36px;

`;



export const OptionsBooks = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;

margin-bottom: 64px;
`;


export const CardOption = styled.TouchableOpacity`
padding: 14px 16px;
width: 160px;
height: 80px;

background-color: ${({theme})=>theme.colors.white300};

border-radius: 4px;

justify-content: center;
align-items: center;


`;

export const TitleCard = styled.Text`
font-size: 20px;
color: ${({theme})=>theme.colors.gray500};

text-align: center;
`;

export const FavoritesHeader = styled.View`
flex-direction: row;

margin-bottom: 10px;

`;

export const FavoritesTitle = styled.Text`
font-size: 24px;
color: ${({theme})=>theme.colors.white200};

margin-right: 13px;
`;

export const FavoritesList = styled.View``; 
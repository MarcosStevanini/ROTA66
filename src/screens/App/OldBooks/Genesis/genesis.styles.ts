import styled from 'styled-components/native';

export const Container = styled.View`
flex-direction: row;
flex-wrap: wrap;

justify-content:space-between;

`;

export const ButtonBack = styled.TouchableOpacity`
margin-bottom: 48px;
`;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;

margin-bottom: 43px;

`;

export const TitleHeader = styled.Text`
font-size: 24px;
color: ${({theme})=>theme.colors.white200};

`;

export const Favorite = styled.TouchableOpacity`
width: 30px;
height: 30px;

border-radius: 30px;

background-color: ${({theme})=>theme.colors.blue400};

align-items: center;
justify-content: center;


`;


export const CardChapter = styled.TouchableOpacity`
width: 50px;
height: 50px;

border-radius: 50px;
background-color: ${({theme})=>theme.colors.blue300};

align-items: center;
justify-content: center;

margin-bottom: 8px;
margin-left: 8px;
margin-top: 8PX;


box-shadow: 2px 2px 0px  white;
`;

export const Number = styled.Text`
font-size: 18px;

color:${({theme})=>theme.colors.white200};
`;





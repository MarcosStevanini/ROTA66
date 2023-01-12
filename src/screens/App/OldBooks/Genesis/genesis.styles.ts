import styled from 'styled-components/native';

export const Container = styled.View`
flex-direction: row;
flex-wrap: wrap;

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
`;

export const Number = styled.Text`
font-size: 18px;

color:${({theme})=>theme.colors.white200};
`;


export const Header = styled.View`
flex-direction: row;
justify-content: flex-start;
align-items: center;


margin-bottom: 64px;

`;

export const ButtonBack = styled.TouchableOpacity`

margin-right: 100px;
`;

export const Title = styled.Text`
font-size: 24px;
color: ${({theme})=>theme.colors.white200};

`;
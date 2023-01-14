import styled from 'styled-components/native';

export const Container = styled.View``;


export const ButtonBack = styled.TouchableOpacity`
margin-bottom: 48px;

`;

export const TitleHeader = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.white200};
font-size: 24px;

margin-bottom: 36px;
`;


export const ContainerList = styled.View`
flex-direction: row;
flex-wrap: wrap;

justify-content: space-around;
padding-bottom: 200px;

`;


export const CardChapter = styled.TouchableOpacity`
width: 180px;
height: 50px;

border-width: 2px;
border-radius: 4px;

border-color: ${({theme})=>theme.colors.blue200};

flex-direction: row;
align-items: center;

margin-bottom: 24px;

background-color: ${({theme})=>theme.colors.blue300};

box-shadow: 2px 2px 0px  white;
`;


export const IconChatper = styled.View`
margin-left: 8px;
margin-right: 8px;

`;


export const TitleChapter = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color:${({theme})=>theme.colors.white200};
font-size: 18px;
font-weight: 500;

`;


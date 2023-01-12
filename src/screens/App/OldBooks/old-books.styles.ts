import styled from 'styled-components/native';

export const Container = styled.View``;


export const Header = styled.View`
flex-direction: row;
justify-content: flex-start;
align-items: center;
margin-bottom: 64px;
`;

export const TitleHeader = styled.Text`
font-size: 24px;
color: ${({theme})=>theme.colors.white200};
`;


export const ContainerList = styled.View`
flex-direction: row;
flex-wrap: wrap;

justify-content: space-between;
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
`;


export const IconChatper = styled.View`
margin-left: 8px;
margin-right: 8px;

`;


export const TitleChapter = styled.Text`
font-size: 18px;
font-weight: 500;
color:${({theme})=>theme.colors.white200};

`;

export const ButtonBack = styled.TouchableOpacity`
margin-right: 100px;

`;

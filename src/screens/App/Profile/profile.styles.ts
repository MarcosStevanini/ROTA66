import styled from 'styled-components/native';
import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const ContainerContent = styled.View`
align-items: center;

`;

export const ButtonBack = styled.TouchableOpacity`
margin-bottom: ${RFPercentage(3)}px;

`;

export const IconUser = styled.View`
width: ${RFPercentage(20)}px;
height: ${RFPercentage(20)}px;

border-radius: ${RFPercentage(20)}px;

background-color:${({theme})=>theme.colors.white300}; ;

align-items: center;
justify-content: center;

margin-bottom: ${RFPercentage(10)}px;

`;

export const ButtonConfig = styled.TouchableOpacity`
width:${RFPercentage(43)}px;
height: ${RFPercentage(7)}px;

flex-direction: row;
align-items: center;


border-radius: 4px;

background-color: ${({theme})=>theme.colors.white100};

margin-bottom: ${RFPercentage(4)}px;
`;

export const TitleConfig = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(14)}px;
color: ${({theme})=>theme.colors.gray300};

`;

export const ButtonCreds = styled.TouchableOpacity`
width:${RFPercentage(43)}px;
height: ${RFPercentage(7)}px;

flex-direction: row;
align-items: center;

border-radius: 4px;

background-color: ${({theme})=>theme.colors.white100};

margin-bottom:  ${RFPercentage(4)}px;

`;

export const TitleCreds = styled.Text`
font-family: ${({theme})=>theme.fonts.bold};
font-size: ${RFValue(14)}px;

color: ${({theme})=>theme.colors.blue200};

`;

export const ButtonLogout = styled.TouchableOpacity`
width:${RFPercentage(43)}px;
height: ${RFPercentage(7)}px;

flex-direction: row;
align-items: center;

border-radius: 4px;
border-width: 2px ;

border-color:${({theme})=>theme.colors.danger}; ;

`;

export const Line = styled.View`
width:${RFPercentage(43)}px;
height: ${RFPercentage(0.1)}px;

background-color: ${({theme})=>theme.colors.white500};

margin-bottom:  ${RFPercentage(4)}px;

`;


export const TitleLogout = styled.Text`
font-family: ${({theme})=>theme.fonts.bold};
font-size: ${RFValue(14)}px;

color: ${({theme})=>theme.colors.danger};
`;

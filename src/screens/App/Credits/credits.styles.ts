import styled from 'styled-components/native';
import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const ButtonBack = styled.TouchableOpacity`
align-items: center;
justify-content: center;

`;

export const Header = styled.View`
flex-direction: row;
margin-bottom: ${RFPercentage(7.2)}px;;
`;

export const TitleHeader = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(24)}px;
color: ${({theme})=>theme.colors.white100};

margin-left:${RFPercentage(4.8)}px;

`;

export const TitleInf = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(14)}px;
color: ${({theme})=>theme.colors.white100};

margin-bottom: ${RFPercentage(4)}px;;
`;

export const TitleProfession = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(15)}px;
color: ${({theme})=>theme.colors.white100};

margin-bottom: ${RFPercentage(3)}px;
`;


export const ContainerDesign = styled.View`
margin-bottom:  ${RFPercentage(4)}px;

`;

export const BoxDeve = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-around;

width: ${RFPercentage(23)}px;
height: ${RFPercentage(10)}px;

background-color: ${({theme})=>theme.colors.blue200};

border-radius: 12px;

margin-bottom: ${RFPercentage(1)}px;

`;

export const ImgPeople = styled.Image`
width: ${RFPercentage(6)}px;
height: ${RFPercentage(6)}px;

border-radius: ${RFPercentage(6)}px;

margin-left:  ${RFPercentage(1)}px;
`;

export const ContentInf = styled.View`
align-items:  flex-end;
margin-right: 1px;

margin-right:  ${RFPercentage(1)}px;

`;

export const Name = styled.Text`
font-family: ${({theme})=>theme.fonts.bold};
font-size: ${RFValue(11)}px;
color: ${({theme})=>theme.colors.white100};

margin-bottom:  ${RFPercentage(0.8)}px;
`;

export const Office = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(9)}px;
color: ${({theme})=>theme.colors.white100};

`;

export const Line = styled.View`
width:${RFPercentage(43)}px;
height: ${RFPercentage(0.1)}px;

background-color: ${({theme})=>theme.colors.white500};

margin-bottom:  ${RFPercentage(3)}px;

`;

export const ContainerDev = styled.View`
flex-direction: row;

justify-content: space-between;

margin-bottom:  ${RFPercentage(1)}px;

`;
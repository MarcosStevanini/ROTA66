import styled from 'styled-components/native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import { AntDesign,Feather } from '@expo/vector-icons'; 

export const Container = styled.View``;


export const ContainerPlayer = styled.View`
align-items: center;
`;

export const Image = styled.ImageBackground`
width: ${RFValue(300)}px;
height: ${RFValue(300)}px;

margin-top: 1px;
margin-bottom: 28px;
`;


export const TitlePlayer = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(18)}px;

color: ${({theme})=>theme.colors.white100};

`;

export const ContainerSlider = styled.View`
margin-top: 30px;

`;

export const ContainerDuration = styled.View`
flex-direction: row;
width:100%;
padding: 5px 22px ;

justify-content: space-between;


`;


export const FirstTime = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(12)}px;

color: ${({theme})=>theme.colors.gray100};
`;

export const FinalTime = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(12)}px;

color: ${({theme})=>theme.colors.gray100};
`;


export const ContainerButton = styled.View`
flex-direction: row;
align-items: center;


margin-top:10px;

`;

export const ButtonPass = styled(Feather)`
font-size: ${RFValue(35)}px;
color: ${({theme})=>theme.colors.white100};
`;

export const ButtonPlay = styled(AntDesign)`
font-size: ${RFValue(50)}px;
color: ${({theme})=>theme.colors.white100};

padding: 0 28px;

`;

export const ButtonPause = styled(Feather)`
font-size: ${RFValue(50)}px;
color: ${({theme})=>theme.colors.white100};

padding: 0 28px;

`;


export const ButtonBack  = styled(Feather)`
font-size: ${RFValue(35)}px;
color: ${({theme})=>theme.colors.white100};
`;

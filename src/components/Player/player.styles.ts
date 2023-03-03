import styled from 'styled-components/native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome,Feather,Ionicons } from '@expo/vector-icons'; 

export const Container = styled.View``;

export const Header = styled.View`
flex-direction: row;
align-items: center;
justify-content: flex-start;

margin-bottom: ${RFPercentage(7)}px;
`;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(24)}px;

color: ${({theme})=>theme.colors.white100};

`;

export const ButtonBackUp = styled.TouchableOpacity`
margin-right: ${RFPercentage(12)}px;
`;

export const ContainerPlayer = styled.View``;


export const Image = styled.ImageBackground`
width: ${RFValue(240)}px;
height: ${RFValue(255)}px;

margin-top: 1px;
margin-bottom: 28px;
`;

export const ContainerImage = styled.View`
align-items: center;
`;

export const ContainerTitle = styled.View`
justify-content: flex-start;
margin-left:  ${RFPercentage(2)}px; 
margin-bottom: ${RFPercentage(3)}px;
`;

export const Study = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(16)}px;

color: ${({theme})=>theme.colors.white100};

margin-bottom: ${RFPercentage(1)}px;

`;

export const TitlePlayer = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(10)}px;

color: ${({theme})=>theme.colors.white100};

`;

export const ContainerSlider = styled.View`
margin-bottom: ${RFPercentage(0.5)}px;
align-items: flex-start;

`;

export const ContainerDuration = styled.View`
flex-direction: row;
justify-content: space-between;

margin-bottom: ${RFPercentage(3)}px;
`;


export const FirstTime = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(12)}px;

color: ${({theme})=>theme.colors.white500};

margin-left:  ${RFPercentage(2)}px; 
`;

export const FinalTime = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(12)}px;

color: ${({theme})=>theme.colors.white500};

margin-right:  ${RFPercentage(1)}px; 
`;


export const ContainerButton = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;


`;

export const ShapeButtonCenter = styled.View`
width:${RFPercentage(8)}px;
height: ${RFPercentage(8)}px;

border-radius: ${RFPercentage(7)}px;

background-color:${({theme})=>theme.colors.gray200};

margin-left:${RFPercentage(3.2)}px; 
margin-right: ${RFPercentage(3.2)}px;

align-items: center;
justify-content: center;

opacity: 0.7;

`;

export const ButtonPass = styled(FontAwesome)`
font-size: ${RFValue(30)}px;
color: ${({theme})=>theme.colors.white100};
`;

export const ButtonPlay = styled(Ionicons)`
font-size: ${RFValue(40)}px;
color: ${({theme})=>theme.colors.white100};


`;

export const ButtonPause = styled(Ionicons)`
font-size: ${RFValue(40)}px;
color: ${({theme})=>theme.colors.white100};

`;

export const ButtonBack  = styled(FontAwesome)`
font-size: ${RFValue(30)}px;
color: ${({theme})=>theme.colors.white100};
`;

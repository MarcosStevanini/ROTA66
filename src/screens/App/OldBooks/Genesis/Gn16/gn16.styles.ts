import styled from 'styled-components/native';
import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex:1;
`;

export const ButtonBack = styled.TouchableOpacity`
margin-bottom:${RFPercentage(4.2)}px;
`;

export const ContainerAudioItem = styled.TouchableOpacity`
flex-direction: row;
`;

export const AudioItem = styled.View`
width: 100%;
height: ${RFPercentage(8)}px;
background-color: ${({theme})=>theme.colors.gray300};
opacity: 0.8;
border-radius: 6px;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom:${RFPercentage(2.4)}px;
`;

export const ContainerInf = styled.View`
width:${RFPercentage(30)}px;
height: ${RFPercentage(5)}px;
justify-content: flex-start;
flex-direction: row;
`;

export const Favorite = styled.TouchableOpacity`
margin-right: ${RFPercentage(1.6)}px;
`;

export const TitleStudy = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(13)}px;
color: ${({theme})=>theme.colors.white200};
margin-bottom: 4px;
`;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(11)}px;
color: ${({theme})=>theme.colors.white200};
margin-bottom: 8px;
`;

export const Time = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(11)}px;
color: ${({theme})=>theme.colors.gray100};
`;

export const ContainerAnimationFavorite = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: ${({theme})=>theme.colors.blue200};
`;

export const ConteinerText1 = styled.View``;

export const ConteinerText2 = styled.View`
width:${RFPercentage(25)}px;
height: ${RFPercentage(15)}px;
`;
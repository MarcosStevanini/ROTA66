import styled from 'styled-components/native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex:1;
`;

export const Header = styled.View`
flex-direction: row;
justify-content: flex-start;
align-items: center;

`;

export const ButtonBack = styled.TouchableOpacity`
margin-bottom: 48px;

`;

export const TitleHeader = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.white200};
font-size: ${RFValue(24)}px;

margin-bottom: 36px;

`;

export const AudioItem = styled.View`
width: ${RFPercentage(48.2)}px;
height: ${RFPercentage(10)}px;

background-color: ${({theme})=>theme.colors.gray200};

border-radius: 6px;

flex-direction: row;


justify-content: space-between;
align-items: center;
`;

export const ContainerAudioItem = styled.TouchableOpacity`
flex-direction: row;

`;

export const ContainerInf = styled.View`
width:${RFPercentage(30)}px;
height: ${RFPercentage(5)}px;
justify-content: flex-start;
margin-top: ${RFPercentage(2)}px;

`;

export const Favorite = styled.TouchableOpacity`
margin-right: ${RFPercentage(1.6)}px;

`;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(12)}px;
color: ${({theme})=>theme.colors.white200};

margin-bottom: 8px;
`;

export const Time = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(12)}px;
color: ${({theme})=>theme.colors.gray100}
`;
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex:1;
`;


export const ContainerAudioItem = styled.TouchableOpacity`
flex-direction: row;
align-items: center;

`;

export const AudioItem = styled.View`
flex-direction: row;
align-items: center;

justify-content: space-between;
`;

export const Image =styled.View`
width:${RFValue(80)}px;
height: ${RFValue(80)}px;

background-color: ${({theme})=>theme.colors.blue200};
`;

export const ContainerInf = styled.View``;

export const Favorite = styled.TouchableOpacity``;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(12)}px;
color: ${({theme})=>theme.colors.white200};
`;

export const Time = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(12)}px;
color: ${({theme})=>theme.colors.gray200}
`;
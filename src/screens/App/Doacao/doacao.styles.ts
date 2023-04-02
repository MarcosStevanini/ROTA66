import styled from 'styled-components/native';
import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';


export const Container = styled.View``;

export const ButtonBack = styled.TouchableOpacity`
align-items: center;
justify-content: center;

`;

export const Header = styled.View`
flex-direction: row;
margin-bottom: ${RFPercentage(7.2)}px;
`;

export const TitleHeader = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(24)}px;
color: ${({theme})=>theme.colors.white100};
margin-left:${RFPercentage(4.8)}px;

`;

export const TitleInf = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(16)}px;
color: ${({theme})=>theme.colors.white100};
margin-bottom: ${RFPercentage(4)}px;
`;


export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(14)}px;
color: ${({theme})=>theme.colors.gray300};
`;

export const ContainerPix = styled.View`
 align-items: center;
 margin-bottom:10px;
`;

export const Pix = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(15)}px;
color: ${({ theme }) => theme.colors.gray300};

`;


export const Box = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color:${({ theme }) => theme.colors.white300};
width:100%
padding:10px;
border-radius: 5px;
`;


export const Obs = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(9)}px;
color: ${({theme})=>theme.colors.white400};
margin-bottom: ${RFPercentage(4)}px;

`;

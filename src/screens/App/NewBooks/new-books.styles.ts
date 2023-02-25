import styled from 'styled-components/native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex: 1;
`;

export const ButtonBack = styled.TouchableOpacity`
margin-bottom: ${RFPercentage(5)}px;

`;

export const TitleHeader = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.white200};
font-size: ${RFValue(24)}px;

margin-bottom: ${RFPercentage(5)}px;
`;

export const ContainerList = styled.View`
flex-direction: row;
flex-wrap: wrap;

justify-content: space-around;
padding-bottom: 100px;

`;

export const CardChapter = styled.TouchableOpacity`
width: ${RFPercentage(21.8)}px;
height: ${RFPercentage(6.5)}px;

border-width: 2px;
border-radius: 4px;

border-color: ${({theme})=>theme.colors.blue200};

flex-direction: row;
align-items: center;

margin-bottom: ${RFPercentage(2.5)}px;

background-color: ${({theme})=>theme.colors.blue300};

box-shadow: 2px 2px 0px  white;
`;

export const IconChatper = styled.View`
margin-left: 8px;
margin-right: 8px;

`;

export const TitleChapter = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(14)}px;
color:${({theme})=>theme.colors.white200};
font-size: ${RFValue(13)}px;

`;


import styled from 'styled-components/native';
import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex: 1;
align-items: center;

`;
export const ContainerAnimation = styled.View`
margin-bottom: ${RFPercentage(2)}px;

`;

export const Title =styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(14)}px;

color:${({theme})=>theme.colors.white100};

margin-bottom: ${RFPercentage(10)}px;

`;

export const ButtonRefresh =styled.TouchableOpacity`
width:  ${RFPercentage(45)}px;
height:  ${RFPercentage(7)}px;

background-color:${({theme})=>theme.colors.blue300};

border-radius: 4px;

align-items: center;
justify-content: center;

`;

export const TitleButton =styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(22)}px;

color:${({theme})=>theme.colors.white300};


`;
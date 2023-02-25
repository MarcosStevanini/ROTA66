import styled from 'styled-components/native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

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
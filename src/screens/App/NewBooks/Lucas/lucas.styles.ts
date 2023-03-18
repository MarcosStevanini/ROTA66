import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex-direction: row;
flex-wrap: wrap;
justify-content:center;
//align-items: flex-start;
`;

export const ButtonBack = styled.TouchableOpacity`
margin-bottom:${RFPercentage(4.2)}px;
`;

export const ButtonFavorite = styled.TouchableOpacity``;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom:${RFPercentage(4.3)}px;
`;

export const TitleHeader = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(22)}px;
color: ${({theme})=>theme.colors.white200};
font-size: ${RFValue(24)}px;
`;

export const Favorite = styled.TouchableOpacity`
width: ${RFPercentage(3)}px;
height: ${RFPercentage(3)}px;
border-radius: ${RFPercentage(3)}px;
background-color: ${({theme})=>theme.colors.blue400};
align-items: center;
justify-content: center;
`;

export const CardChapter = styled.TouchableOpacity`
width: ${RFPercentage(7)}px;
height: ${RFPercentage(7)}px;
border-radius: ${RFPercentage(5)}px;
background-color: ${({theme})=>theme.colors.blue300};
align-items: center;
justify-content: center;
margin-left: ${RFPercentage(0.8)}px;
margin-top: ${RFPercentage(0.8)}px;
box-shadow: 2px 2px 0px  white;
`;

export const Number = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(14)}px;
color:${({theme})=>theme.colors.white200};
font-size: ${RFValue(18)}px;
`;

export const ContainerAnimationFavorite = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: ${({theme})=>theme.colors.blue200};
`;



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
margin-bottom: ${RFPercentage(5)}px;

`;

export const TitleHeader = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
color: ${({theme})=>theme.colors.white200};
font-size: ${RFValue(24)}px;

margin-bottom: ${RFPercentage(3.6)}px;

`;

export const AudioItem = styled.View`
width: ${RFPercentage(48)}px;
height: ${RFPercentage(9)}px;
background-color: ${({theme})=>theme.colors.gray300};

border-radius: 6px;

flex-direction: row;
justify-content: space-between;
align-items: center;
opacity: 0.9;
margin-bottom:${RFPercentage(2.4)}px;
`;

export const ContainerAudioItem = styled.TouchableOpacity`
flex-direction: row;

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
font-size: ${RFValue(12)}px;
color: ${({theme})=>theme.colors.white200};

margin-bottom: ${RFPercentage(0.8)}px;

`;

export const Time = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: ${RFValue(12)}px;
color: ${({theme})=>theme.colors.gray100};
`;


export const ContainerAnimationFavorite = styled.View`
flex: 1;
align-items: center;
justify-content: center;

background-color: ${({theme})=>theme.colors.blue200};

`;

export const TitleEmptyList = styled.Text`
font-family: ${({theme})=>theme.fonts.regular};
font-size: ${RFValue(12)}px;
color: ${({theme})=>theme.colors.white400};

margin-top: ${RFPercentage(1)}px;


`;

export const EmptyContainer = styled.View`
align-items: center;
justify-content: flex-start;


`;
export const ConteinerText1 = styled.View``;

export const ConteinerText2 = styled.View`
width:${RFPercentage(24)}px;
height: ${RFPercentage(15)}px;



`;

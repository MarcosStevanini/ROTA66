import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex:1;
`;

export const AudioItem = styled.TouchableOpacity`
flex-direction: row;
align-items: center;

`;

export const Image =styled.View`
width: 80px;
height: 80px;


background-color: ${({theme})=>theme.colors.blue200};
`;

export const ContainerInf = styled.View`

`;

export const Title = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: 14px;
color: ${({theme})=>theme.colors.white200};
`;

export const Time = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
font-size: 14px;
color: ${({theme})=>theme.colors.gray200}
`;
import styled from 'styled-components/native';

export const AudioItem = styled.TouchableOpacity`
flex-direction: row;

`;

export const Image =styled.Image`
width: 80px;
height: 80px;

`;

export const ContainerInf = styled.View`

`;

export const Title = styled.Text`
font-size: 14px;
color: ${({theme})=>theme.colors.white200};
`;

export const Time = styled.Text`
font-size: 12px;
color: ${({theme})=>theme.colors.white200}
`;
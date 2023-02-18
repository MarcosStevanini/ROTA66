import styled from 'styled-components/native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    padding-top: ${RFPercentage(5)}px;
`;

export const ContainerUser = styled.View`
    padding-top: ${RFPercentage(3)}px;
`;

export const TextUser = styled.Text`
    color: ${({theme})=>theme.colors.white100};
    font-weight: 600;
    font-size: ${RFValue(16)}px;
`;

export const TextHeaderPrifile = styled.Text`
    color: ${({theme})=>theme.colors.white100};
    font-weight: 800;
    font-size: ${RFValue(28)}px;
`;

export const TextSubHeaderPrifile = styled.Text`
    color: ${({theme})=>theme.colors.white100};
    font-size: ${RFValue(16)}px;
`;

export const Text = styled.Text`
    color: ${({theme})=>theme.colors.white100};
`;

export const Input = styled.TextInput`
    background: ${({theme})=>theme.colors.gray100};
    text-transform: capitalize !important;
    color: ${({theme})=>theme.colors.white100};
    padding: 13px 16px;
    border: none;
    margin-bottom: ${RFPercentage(1.6)}px;
    border-radius: 4px;
    margin-top: ${RFPercentage(1)}px;
`;

export const Button = styled.TouchableOpacity`
    background: ${({theme})=>theme.colors.blue200};
    padding: 12px 0;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image``;
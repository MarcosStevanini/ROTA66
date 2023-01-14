import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const TextButton = styled.Text`
font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.white100};
    font-size: 17px;
    font-weight: 500;
`;

export const AccountText = styled.Text`
    color: ${({theme})=>theme.colors.white400};
    margin: 15px 0 8px 0;
`;
export const CreateAccountText = styled.Text`
    margin: 15px 0;
    color: ${({theme})=>theme.colors.yellow400};
`;

export const CreateAccount = styled.TouchableOpacity``;

export const submitText = styled.Text`
    color: ${({theme})=>theme.colors.white400};
`;
export const changePassword = styled.TouchableOpacity`
    margin: 20px 0;
    align-self: flex-end;
`;

export const Image = styled.Image`
    width:  ${RFValue(150)}px;
    height: ${RFValue(150)}px;
    margin-top: 65px;
`;

export const Loading = styled.Image`
    width: 10px;
    height: 10px;
`;

export const Input = styled.TextInput`
    background: transparent;
    color: ${({theme})=>theme.colors.white100};
    padding: 13px 16px;
    border: solid 1px ${({theme})=>theme.colors.white100};
    margin-bottom: 48px;
    border-radius: 4px;
`;

export const ContainerInput = styled.View`
    flex: 1;
    width: 100%;
    padding: 48px 10%;
`;

export const ButtonInput = styled.TouchableOpacity`
    background:  ${({theme})=>theme.colors.blue200};
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 12px 0;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.TouchableOpacity`
flex-direction: row;
justify-content: flex-start;

padding-left: 32px;
padding-top: 16px;


`;
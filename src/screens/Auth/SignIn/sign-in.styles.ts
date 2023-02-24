import styled from 'styled-components/native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size:  ${RFValue(17)}px;
    color: ${({theme})=>theme.colors.white100};
  
`;

export const AccountText = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
  font-size:  ${RFValue(14)}px;
  color: ${({theme})=>theme.colors.white400};
    
`;
export const CreateAccountText = styled.Text`
  font-family: ${({theme})=>theme.fonts.bold};
  font-size:  ${RFValue(14)}px;
  color: ${({theme})=>theme.colors.white100};
    
`;

export const CreateAccount = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: ${RFPercentage(4)}px;
`;

export const submitText = styled.Text`
     font-family: ${({theme})=>theme.fonts.medium};
     font-size:  ${RFValue(14)}px;
     color: ${({theme})=>theme.colors.white400};
`;
export const changePassword = styled.TouchableOpacity`
    margin-bottom: 36px;
    align-self: flex-end;
`;

export const Loading = styled.Image`
    width:  ${RFValue(10)}px;
    height: ${RFValue(10)}px;
`;

export const Input = styled.TextInput`
    background: transparent;
    color: ${({theme})=>theme.colors.white100};
    padding: 13px 16px;
    border: 1px solid ${({theme})=>theme.colors.white400};
    margin-bottom: ${RFPercentage(1.6)}px;
    border-radius: 4px;
    
`;

export const ContainerInput = styled.View`
    width: 100%;
    padding: 10% 8%;
`;

export const ButtonInput = styled.TouchableOpacity`
    background:  ${({theme})=>theme.colors.blue200};
    padding: 12px 0;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    justify-content: center;
    align-items: center; 
`;

export const CreateAccountSocial = styled.TouchableOpacity`
    background:  ${({theme})=>theme.colors.white300};
    padding: 16px;
    margin-bottom: ${RFPercentage(3)}px;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`
export const CreateAccountTextSocial = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size:  ${RFValue(16)}px;
    color: ${({theme})=>theme.colors.gray300};
    text-align: center;

`

export const TextOr = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({theme})=>theme.colors.white400};
    align-items: center;
    align-self: center;
    margin-bottom: ${RFPercentage(2.5)}px;
`;
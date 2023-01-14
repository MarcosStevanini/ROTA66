import styled from 'styled-components/native';

import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';

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
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.white400};
    margin: 15px 0 8px 0;
`;
export const CreateAccountText = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.yellow400};
    margin: 15px 0;
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
    width: 200px;
    height: 200px;
    margin-top: 70px;
`;

export const Loading = styled.Image`
    width: 10px;
    height: 10px;
`;

export const Input = styled.TextInput`
    background: transparent;
    color: ${({theme})=>theme.colors.white100};
    padding: 13px 16px;
    border: 1px solid ${({theme})=>theme.colors.white400};
    margin-bottom: 16px;
    border-radius: 4px;
`;

export const ContainerInput = styled.View`
    flex: 1;
    width: 100%;
    padding: 10% 8%;
`;

export const ButtonInput = styled.TouchableOpacity`
    background:  ${({theme})=>theme.colors.blue200};
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 12px 0;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;

export const ButtonAccess = styled.TouchableOpacity`
    align-self: center;
`

export const TextQuestAccess = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold}; 
    color: ${({theme})=>theme.colors.white400};
    text-align: center;
    margin-top: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const TextAccess = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};  
    color: ${({theme})=>theme.colors.white100};
    font-weight: 600;
    margin-left: 7px;
`

export const CreateAccountSocial = styled.TouchableOpacity`
    background:  ${({theme})=>theme.colors.white300};
    padding: 16px;
    margin-bottom: 24px;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`
export const CreateAccountTextSocial = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    color: ${({theme})=>theme.colors.gray300};
    text-align: center;
    font-weight: 500;
`

export const TextOr = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({theme})=>theme.colors.white400};
    align-items: center;
    align-self: center;
    margin-bottom: 24px;
`;
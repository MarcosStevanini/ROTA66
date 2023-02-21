import styled from 'styled-components/native';
<<<<<<< HEAD

import { RFValue } from 'react-native-responsive-fontsize';
=======
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
>>>>>>> dev

export const Container = styled.View`
    flex: 1;
    align-items: center;
    
`;

export const TextButton = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};  
    color: ${({theme})=>theme.colors.white100};
    font-size: ${RFValue(17)}px;
<<<<<<< HEAD
   `;

export const changePassword = styled.TouchableOpacity`
    margin: 20px 0;
    align-self: flex-end;
=======

`;

export const Loading = styled.Image`
    width:  ${RFValue(10)}px;
    height: ${RFValue(10)}px;
>>>>>>> dev
`;

export const Input = styled.TextInput`
    background: transparent;
    color: ${({theme})=>theme.colors.white100};
    padding: 13px 16px;
    border: 1px solid ${({theme})=>theme.colors.white400};
    margin-bottom: ${RFPercentage(2)}px;
    border-radius: 4px;
`;

export const ContainerInput = styled.View`
    width: 100%;
    padding: 10% 8%;
`;

export const ButtonInput = styled.TouchableOpacity`
    background:  ${({theme})=>theme.colors.blue200};
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 12px 0;
    margin-top: ${RFPercentage(2)}px;
    justify-content: center;
    align-items: center;
`;

export const ButtonAccess = styled.TouchableOpacity`
    align-self: center;
    margin-top: ${RFPercentage(2)}px;
`

export const TextQuestAccess = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold}; 
<<<<<<< HEAD
    font-size: ${RFValue(12)}px;
    color: ${({theme})=>theme.colors.white400};
    text-align: center;
    margin-top: 48px;
=======
    font-size:${RFValue(14)}px;
    color: ${({theme})=>theme.colors.white400};
    text-align: center;
    margin-top: ${RFPercentage(2)}px;
>>>>>>> dev
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const TextAccess = styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};  
<<<<<<< HEAD
    font-size: ${RFValue(12)}px;
    color: ${({theme})=>theme.colors.white100};
    margin-left: 7px;
=======
    font-size:${RFValue(14)}px;
    color: ${({theme})=>theme.colors.white100};
    margin-left: ${RFPercentage(2)}px;
>>>>>>> dev
`

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
<<<<<<< HEAD
    font-size: ${RFValue(14)}px;
    color: ${({theme})=>theme.colors.gray300};
    text-align: center;
   
=======
    font-size:${RFValue(16)}px;
    color: ${({theme})=>theme.colors.gray300};
    text-align: center;
    
>>>>>>> dev
`

export const TextOr = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${({theme})=>theme.colors.white400};
    align-items: center;
    align-self: center;
    margin-bottom: ${RFPercentage(2.5)}px;
`;
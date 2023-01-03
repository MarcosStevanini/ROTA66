import styled from 'styled-components/native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-size:  ${RFValue(17)}px;
    font-weight: 500;
`;

export const AccountText = styled.Text`
    color: #BDBDBD;
    align-items: center;
    align-self: center;
    margin: 15px 0 8px 0;
`;
export const CreateAccountText = styled.Text`
    color: #FFFFFF;
    
`;

export const CreateAccount = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const submitText = styled.Text`
    color: #BDBDBD;
`;
export const changePassword = styled.TouchableOpacity`
    margin: 20px 0;
    align-self: flex-end;
`;

export const Image = styled.Image`
    width:  ${RFValue(150)}px;
    height: ${RFValue(150)}px;
    /* margin-top: 70px; */
`;

export const Loading = styled.Image`
    width:  ${RFValue(10)}px;
    height: ${RFValue(10)}px;
`;

export const Input = styled.TextInput`
    background: transparent;
    text-transform: uppercase;
    color: #fff;
    padding: 16px 10px;
    border: 1px solid #BDBDBD;
    margin: 10px 0;
    border-radius: 4px;
`;

export const ContainerInput = styled.View`
    width: 100%;
    padding: 20% 8%;
`;

export const ButtonInput = styled.TouchableOpacity`
    /* background-color: #FBB03F;
    border-radius: 9px;*/
    background: #0C64BB;
    padding: 12px 0;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    justify-content: center;
    align-items: center; 
`;

export const CreateAccountSocial = styled.TouchableOpacity`
    background: #DADADA;
    padding: 20px;
    margin-bottom: ${RFPercentage(3)}px;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`
export const CreateAccountTextSocial = styled.Text`
    text-align: center;
    color: #333;
    font-weight: 500;
`

export const TextOr = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #BDBDBD;
    align-items: center;
    align-self: center;
    margin: 10px 0 10px 0;
`;
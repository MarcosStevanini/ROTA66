import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-size: 17px;
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
    width: 150px;
    height: 150px;
    /* margin-top: 70px; */
`;

export const Loading = styled.Image`
    width: 10px;
    height: 10px;
`;

export const Input = styled.TextInput`
    background: transparent;
    text-transform: uppercase;
    color: #fff;
    padding: 20px 10px;
    border: 1px solid #BDBDBD;
    margin: 10px 0;
    border-radius: 4px;
`;

export const ContainerInput = styled.View`
    flex: 1;
    width: 100%;
    padding: 20% 10%;
`;

export const ButtonInput = styled.TouchableOpacity`
    /* background-color: #FBB03F;
    border-radius: 9px;*/
    background: #0C64BB;
    padding: 20px 0;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    justify-content: center;
    align-items: center; 
`;

export const CreateAccountSocial = styled.TouchableOpacity`
    background: #DADADA;
    padding: 15px;
    margin-bottom: 25px;
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
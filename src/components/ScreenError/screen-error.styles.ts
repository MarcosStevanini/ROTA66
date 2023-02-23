import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex: 1;
align-items: center;

`;

export const Image = styled.Image`
    width: ${RFValue(100)}px;
    height: ${RFValue(100)}px;
    margin-top: 70px;
    margin-bottom: 192px;
`;

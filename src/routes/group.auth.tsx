import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../screens/Auth/SignUp/sign-up.component';
import ForgotPassword from '../screens/Auth/ForgotPassword/forgotpassword.component';
import Loading from '../components/Loading/loading.component';

export const GroupAuth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Group>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}} />
      <Stack.Screen name="Loading" component={Loading} options={{headerShown: false}}/>
    </Stack.Group>
  )
}
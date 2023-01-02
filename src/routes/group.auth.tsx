import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../screens/Auth/SignUp/sign-up.component';
import Home from '../screens/App/Home/home.component'

export const GroupAuth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Group>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Group>
  )
}
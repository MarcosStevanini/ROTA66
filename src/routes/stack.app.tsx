import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GroupAuth } from './group.auth';
import SignIn from '../screens/Auth/SignIn/sign-in.component';

// import Profile from '../components/Profile/CreateProfile.component';

export const StackApp = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='SignIn'>
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
      {GroupAuth()}
    </Stack.Navigator>
  )
}
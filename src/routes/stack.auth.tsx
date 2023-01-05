import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {GroupAuth} from './group.auth';
import TabNavigation from './tab.app';

export const StackAuth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      {GroupAuth()}
    </Stack.Navigator>
  )
}
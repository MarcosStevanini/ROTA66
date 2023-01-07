import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {GroupAuth} from './group.auth';
import TabNavigation from './tab.app';
import  ChaptersList from '../screens/App/ChaptersList/chapters-list.component';



export const StackAuth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="ChaptersList" component={ChaptersList} />
         
      {GroupAuth()}
    </Stack.Navigator>
  )
}
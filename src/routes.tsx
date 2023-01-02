import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackAuth } from './routes/stack.auth'
import { StackApp } from './routes/stack.app'
import { StatusBar } from 'expo-status-bar';

import * as S from '../theme.styles';

export default function Routes() {
  const Stack = createNativeStackNavigator();

  const isLogged = false;

  function AppScreen() {
    if (isLogged) return <Stack.Screen name='StackAuth' component={StackAuth} />

    return <Stack.Screen name='App' component={StackApp} />
  }

  return (
    <NavigationContainer theme={S.Theme}>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {AppScreen()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
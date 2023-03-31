import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/firebaseConfig'

import { StackAuth } from './routes/stack.auth'
import { StackApp } from './routes/stack.app'
import { StatusBar } from 'expo-status-bar'

export default function Routes() {
  const Stack = createNativeStackNavigator()
  const [user] = useAuthState(auth)

  function AppScreen() {
    if (user) {
      return <Stack.Screen name="StackAuth" component={StackAuth} />
    }

    return <Stack.Screen name="StackApp" component={StackApp} />
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {AppScreen()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
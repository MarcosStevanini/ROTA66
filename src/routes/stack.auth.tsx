import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GroupAuth } from './group.auth'
import TabNavigation from './tab.app'
import Books from '../screens/App/Books/books.component'
import NewBooks from '../screens/App/NewBooks/new-books.component'
import OldBooks from '../screens/App/OldBooks/old-books.component'
import Genesis from '../screens/App/OldBooks/Genesis/genesis.component'
import Gn1 from '../screens/App/OldBooks/Genesis/Gn1/gn1.component'
import CreateProfile from '../components/CreateProfile/CreateProfile.component'

export const StackAuth = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName="CreateProfile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="CreateProfile"
        component={CreateProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="NewBooks" component={NewBooks} />
      <Stack.Screen name="OldBooks" component={OldBooks} />
      <Stack.Screen name="Genesis" component={Genesis} />
      <Stack.Screen name="Gn1" component={Gn1} />

      {GroupAuth()}
    </Stack.Navigator>
  )
}

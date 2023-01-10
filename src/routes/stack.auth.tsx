import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GroupAuth } from './group.auth'
import TabNavigation from './tab.app'
import OldChaptersList from '../screens/App/OldChaptersList/old-chapters-list.component'
import Genesis from '../screens/App/OldChaptersList/Genesis/genesis.component'
import Gn1A from '../screens/App/OldChaptersList/Genesis/Gn-1A/gn1A.component'
import CreateProfile from '../components/CreateProfile/CreateProfile.component'

export const StackAuth = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='CreateProfile' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreateProfile" component={CreateProfile} options={{headerShown: false}} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="OldChaptersList" component={OldChaptersList} />
      <Stack.Screen name="Genesis" component={Genesis} />
      <Stack.Screen name="Gn1A" component={Gn1A} />

      {GroupAuth()}
    </Stack.Navigator>
  )
}

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GroupAuth } from './group.auth'
import TabNavigation from './tab.app'
import OldChaptersList from '../screens/App/OldChaptersList/old-chapters-list.component'
import Genesis from '../screens/App/OldChaptersList/Genesis/genesis.component'
import  Gn1  from '../screens/App/OldChaptersList/Genesis/Gn1/gn1.component'

export const StackAuth = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="OldChaptersList" component={OldChaptersList} />
      <Stack.Screen name="Genesis" component={Genesis} />
      <Stack.Screen name="Gn1" component={Gn1} />

      {GroupAuth()}
    </Stack.Navigator>
  )
}

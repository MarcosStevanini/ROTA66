import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GroupAuth } from './group.auth'
import TabNavigation from './tab.app'
import OldChaptersList from '../screens/App/OldChaptersList/old-chapters-list.component'
import Genesis from '../screens/App/OldChaptersList/Genesis/genesis.component'
<<<<<<< HEAD
import  Gn1  from '../screens/App/OldChaptersList/Genesis/Gn1/gn1.component'
=======
import Gn1A from '../screens/App/OldChaptersList/Genesis/Gn-1A/gn1A.component'
import CreateProfile from '../components/CreateProfile/CreateProfile.component'
>>>>>>> adff9eb627db0e2f3395df198c93cb36e8a38ebb

export const StackAuth = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='CreateProfile' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CreateProfile" component={CreateProfile} options={{headerShown: false}} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="OldChaptersList" component={OldChaptersList} />
      <Stack.Screen name="Genesis" component={Genesis} />
      <Stack.Screen name="Gn1" component={Gn1} />

      {GroupAuth()}
    </Stack.Navigator>
  )
}

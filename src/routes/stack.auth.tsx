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
import PlayerAudio from '../screens/App/PlayerAudio/player-audio.component'
import Profile from '../screens/App/Profile/profile.component'
import Credits from '../screens/App/Credits/credits.component'
import Config from '../screens/App/Config/config.component'
import UpdateName from '../components/UpdateName/update-name.component'
import UpdateEmail from '../components/UpdateEmail/update-email.component'


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
      <Stack.Screen name="PlayerAudio" component={PlayerAudio} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Config" component={Config} />
      <Stack.Screen name="Credits" component={Credits} />
      <Stack.Screen name="UpdateName" component={UpdateName} />
      <Stack.Screen name="UpdateEmail" component={UpdateEmail} />

      {GroupAuth()}
    </Stack.Navigator>
  )
}

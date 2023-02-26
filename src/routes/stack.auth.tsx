import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GroupAuth } from './group.auth'
import TabNavigation from './tab.app'
import Books from '../screens/App/Books/books.component'
import NewBooks from '../screens/App/NewBooks/new-books.component'
import OldBooks from '../screens/App/OldBooks/old-books.component'
import Genesis from '../screens/App/OldBooks/Genesis/genesis.component'
import Gn1 from '../screens/App/OldBooks/Genesis/Gn1/gn1.component'
import Gn2 from '../screens/App/OldBooks/Genesis/Gn2/gn2.component'
import Gn3 from '../screens/App/OldBooks/Genesis/Gn3/gn3.component'
import Gn4 from '../screens/App/OldBooks/Genesis/Gn4/gn4.component'
import Gn5 from '../screens/App/OldBooks/Genesis/Gn5/gn5.component'
import Gn6 from '../screens/App/OldBooks/Genesis/Gn6/gn6.component'
import Gn7 from '../screens/App/OldBooks/Genesis/Gn7/gn7.component'
import Gn8 from '../screens/App/OldBooks/Genesis/Gn8/gn8.component'
import Gn9 from '../screens/App/OldBooks/Genesis/Gn9/gn9.component'
import Gn10 from '../screens/App/OldBooks/Genesis/Gn10/gn10.component'
import Gn11 from '../screens/App/OldBooks/Genesis/Gn11/gn11.component'
import Gn12 from '../screens/App/OldBooks/Genesis/Gn12/gn12.component'
import Gn13 from '../screens/App/OldBooks/Genesis/Gn13/gn13.component'
import Gn14 from '../screens/App/OldBooks/Genesis/Gn14/gn14.component'
import Gn15 from '../screens/App/OldBooks/Genesis/Gn15/gn15.component'
import Gn16 from '../screens/App/OldBooks/Genesis/Gn16/gn16.component'
import Gn17 from '../screens/App/OldBooks/Genesis/Gn17/gn17.component'
import Gn18 from '../screens/App/OldBooks/Genesis/Gn18/gn18.component'
import Gn19 from '../screens/App/OldBooks/Genesis/Gn19/gn19.component'
import Gn20 from '../screens/App/OldBooks/Genesis/Gn20/gn20.component'
import Gn21 from '../screens/App/OldBooks/Genesis/Gn21/gn21.component'
import Gn22 from '../screens/App/OldBooks/Genesis/Gn22/gn22.component'
import Gn23 from '../screens/App/OldBooks/Genesis/Gn23/gn23.component'
import Gn24 from '../screens/App/OldBooks/Genesis/Gn24/gn24.component'
import Gn25 from '../screens/App/OldBooks/Genesis/Gn25/gn25.component'
import Gn26 from '../screens/App/OldBooks/Genesis/Gn26/gn26.component'
import Gn27 from '../screens/App/OldBooks/Genesis/Gn27/gn27.component'
import Gn28 from '../screens/App/OldBooks/Genesis/Gn28/gn28.component'
import Gn29 from '../screens/App/OldBooks/Genesis/Gn29/gn29.component'
import Gn30 from '../screens/App/OldBooks/Genesis/Gn30/gn30.component'
import Gn31 from '../screens/App/OldBooks/Genesis/Gn31/gn31.component'
import Gn32 from '../screens/App/OldBooks/Genesis/Gn32/gn32.component'
import Gn33 from '../screens/App/OldBooks/Genesis/Gn33/gn33.component'
import Gn34 from '../screens/App/OldBooks/Genesis/Gn34/gn34.component'
import Gn35 from '../screens/App/OldBooks/Genesis/Gn35/gn35.component'
import Gn36 from '../screens/App/OldBooks/Genesis/Gn36/gn36.component'
import Gn37 from '../screens/App/OldBooks/Genesis/Gn37/gn37.component'
import Gn38 from '../screens/App/OldBooks/Genesis/Gn38/gn38.component'
import Gn39 from '../screens/App/OldBooks/Genesis/Gn39/gn39.component'
import Gn40 from '../screens/App/OldBooks/Genesis/Gn40/gn40.component'
import Gn41 from '../screens/App/OldBooks/Genesis/Gn41/gn41.component'
import Gn42 from '../screens/App/OldBooks/Genesis/Gn42/gn42.component'
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
      <Stack.Screen name="Gn2" component={Gn2} />
      <Stack.Screen name="Gn3" component={Gn3} />
      <Stack.Screen name="Gn4" component={Gn4} />
      <Stack.Screen name="Gn5" component={Gn5} />
      <Stack.Screen name="Gn6" component={Gn6} />
      <Stack.Screen name="Gn7" component={Gn7} />
      <Stack.Screen name="Gn8" component={Gn8} />
      <Stack.Screen name="Gn9" component={Gn9} />
      <Stack.Screen name="Gn10" component={Gn10} />
      <Stack.Screen name="Gn11" component={Gn11} />
      <Stack.Screen name="Gn12" component={Gn12} />
      <Stack.Screen name="Gn13" component={Gn13} />
      <Stack.Screen name="Gn14" component={Gn14} />
      <Stack.Screen name="Gn15" component={Gn15} />
      <Stack.Screen name="Gn16" component={Gn16} />
      <Stack.Screen name="Gn17" component={Gn17} />
      <Stack.Screen name="Gn18" component={Gn18} />
      <Stack.Screen name="Gn19" component={Gn19} />
      <Stack.Screen name="Gn20" component={Gn20} />
      <Stack.Screen name="Gn21" component={Gn21} />
      <Stack.Screen name="Gn22" component={Gn22} />
      <Stack.Screen name="Gn23" component={Gn23} />
      <Stack.Screen name="Gn24" component={Gn24} />
      <Stack.Screen name="Gn25" component={Gn25} />
      <Stack.Screen name="Gn26" component={Gn26} />
      <Stack.Screen name="Gn27" component={Gn27} />
      <Stack.Screen name="Gn28" component={Gn28} />
      <Stack.Screen name="Gn29" component={Gn29} />
      <Stack.Screen name="Gn30" component={Gn30} />
      <Stack.Screen name="Gn31" component={Gn31} />
      <Stack.Screen name="Gn32" component={Gn32} />
      <Stack.Screen name="Gn33" component={Gn33} />
      <Stack.Screen name="Gn34" component={Gn34} />
      <Stack.Screen name="Gn35" component={Gn35} />
      <Stack.Screen name="Gn36" component={Gn36} />
      <Stack.Screen name="Gn37" component={Gn37} />
      <Stack.Screen name="Gn38" component={Gn38} />
      <Stack.Screen name="Gn39" component={Gn39} />
      <Stack.Screen name="Gn40" component={Gn40} />
      <Stack.Screen name="Gn41" component={Gn41} />
      <Stack.Screen name="Gn42" component={Gn42} />
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

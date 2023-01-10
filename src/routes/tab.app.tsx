import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons, Feather } from '@expo/vector-icons';

import Home from '../screens/App/Home/home.component'
import Share from '../components/Share/share.component';
import Config from '../screens/App/Config/config.component';
import Playlist from '../screens/App/Playlist/playlist.component';

const Tab = createBottomTabNavigator();

export default function TabApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#FFF',
        tabBarActiveTintColor: '#1F8FFD',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ 
          tabBarIcon: () => <Entypo name="home" size={24} color="white" />,
          headerShown: false,
          // headerStyle: {backgroundColor: '#010A14'},
          // tabBarStyle: {backgroundColor: '#065099'},
        }} />
      <Tab.Screen
        name="Playlist"
        component={Playlist}
        options={{
          tabBarIcon: () => <MaterialIcons name="playlist-add" size={24} color="white" />,
          headerShown: false,
          // headerStyle: {backgroundColor: '#010A14'},
          // tabBarStyle: {backgroundColor: '#065099'},
        }} />
      <Tab.Screen
        name="Share"
        component={Share}
        options={{
          title: 'Compartilhar',
          tabBarIcon: () => <Entypo name="share" size={24} color="white" />,
          headerShown: false,
          // headerStyle: {backgroundColor: '#010A14'},
          // tabBarStyle: {backgroundColor: '#065099'},
        }} />
      <Tab.Screen
        name="Config"
        component={Config}
        options={{
          title: 'Configurações',
          tabBarIcon: () => <Feather name="settings" size={24} color="white" />,
          headerShown: false,
          // headerStyle: {backgroundColor: '#010A14'},
          // tabBarStyle: {backgroundColor: '#065099'},
        }} />
    </Tab.Navigator>
  );
}
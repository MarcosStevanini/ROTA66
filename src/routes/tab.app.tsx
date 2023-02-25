import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from '@expo/vector-icons'
import theme from '../global/styles/theme'
import Home from '../screens/App/Home/home.component'
import Books from '../screens/App/Books/books.component'
import Favorite from '../screens/App/Favorite/favorite.component'


type PropsButton = {
  children: any
  onPress: () =>  void
}
const Tab = createBottomTabNavigator()

const CustomTabBarButton = ({ children, onPress }: PropsButton) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        top: -24,
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <LinearGradient
        colors={theme.colors.gradientButton}
        style={{
          width: 57,
          height: 57,
          borderRadius: 57
        }}
      >
        {children}
      </LinearGradient>
    </View>
  </TouchableOpacity>
)

export default function TabApp() {
  const theme = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: theme.colors.gray200,
        tabBarActiveTintColor: theme.colors.blue300,
        tabBarStyle: {
          backgroundColor: theme.colors.white100,
          borderTopColor: 'transparent',
          position: 'absolute',
          height: RFPercentage(7),
          bottom: RFPercentage(5),
          left: RFPercentage(3.2),
          right: RFPercentage(3.2),
          borderRadius: RFPercentage(3),
          paddingBottom: RFPercentage(0.5)
        },
        tabBarLabelStyle: {
          fontSize: RFValue(10),
          fontFamily: theme.fonts.medium
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={26} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Books"
        component={Books}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Feather
              name="headphones"
              size={35}
              color={theme.colors.white100}
            />
          ),
          headerShown: false,
          tabBarButton: props => <CustomTabBarButton {...props} />
        }}
      />

      <Tab.Screen
        name="Favoritos"
        component={Favorite}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={28} color={color} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}

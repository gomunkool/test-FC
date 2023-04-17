import React from 'react'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import Main from './pages/Main/Main'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'SignIn', headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Main', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

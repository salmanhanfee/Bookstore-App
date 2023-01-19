import React from 'react';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import RootStack from './RootStack';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenStack from './screens/ScreenStack';

const Stack = createStackNavigator();

function App() {
return(
  <Stack.Navigator screenOptions={{headerShown : false}} >
    <Stack.Screen name= "Login" component={Login} />
    <Stack.Screen name = "Signup" component={Signup} />
    <Stack.Screen name= "ScreenStack" component={ScreenStack} />
  </Stack.Navigator>
);
}

export default () => {
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
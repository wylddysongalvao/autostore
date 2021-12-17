/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();

import Login from './src/pages/login';
import Home from './src/pages/sale';
import LottieView from 'lottie-react-native';
import SystemUiFlags from 'react-native-system-ui-flags';
import Admin from './src/pages/admin';
import SingUp from './src/pages/singUp';
import AllClients from './src/pages/allClients';

function App() {

  const FULL_SCREEN_SYSTEM_UI_FLAGS = 0
        | SystemUiFlags.SYSTEM_UI_FLAG_HIDE_NAVIGATION
        | SystemUiFlags.SYSTEM_UI_FLAG_FULLSCREEN
        | SystemUiFlags.SYSTEM_UI_FLAG_IMMERSIVE
        | SystemUiFlags.SYSTEM_UI_FLAG_LAYOUT_STABLE
        | SystemUiFlags.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
        | SystemUiFlags.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN;
        
  SystemUiFlags.updateSystemUiFlags(FULL_SCREEN_SYSTEM_UI_FLAGS);

  return (
    <NavigationContainer>

      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Initial"
      >

        <Stack.Screen name="Initial" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="SingUp" component={SingUp} />
        <Stack.Screen name="AllClients" component={AllClients} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;

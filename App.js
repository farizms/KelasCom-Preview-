import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './src/screens/OnboardingScreen';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MainTabScreen from './src/screens/MainTabScreen';

const AppStack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator
      headerMode='none'
      >
        <AppStack.Screen name='OnboardingScreen' component={OnboardingScreen} />
        <AppStack.Screen name='SignInScreen' component={SignInScreen}/>
        <AppStack.Screen name='HomeScreen' component={HomeScreen}/>
        <AppStack.Screen name='SignUpScreen' component={SignUpScreen}/>     
        <AppStack.Screen name='MainTabScreen' component={MainTabScreen}/>   
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
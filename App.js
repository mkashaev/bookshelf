import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from './app/screens/AppSwitchNavigator/WelcomeScreen'; 




const AppSwitchNavigator = createSwitchNavigator({
  WelcomeScreen
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const App = () => <AppContainer />

export default App;

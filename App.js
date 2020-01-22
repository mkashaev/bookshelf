import React from 'react';
import { View } from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import WelcomeScreen from './app/screens/AppSwitchNavigator/WelcomeScreen';
import HomeScreen from './app/screens/HomeScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import SettingsScreen from './app/screens/SettingsScreen';

const LoginStackNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  SignUpScreen
});

const AppDrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      drawerIcon: () => <Ionicons name="md-home" size={24} />
    }
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      title: 'Settings',
      drawerIcon: () => <Ionicons name="md-settings" size={24} />
    }
  }
})


const AppSwitchNavigator = createSwitchNavigator({
  LoginStackNavigator,
  AppDrawerNavigator
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const App = () => <AppContainer />

export default App;

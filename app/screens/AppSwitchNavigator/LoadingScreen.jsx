import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import colors from '../../../assets/colors';


class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Navigate to home screen
        this.props.navigation.navigate('HomeScreen', {user});
      } else {
        // Navigate to login
        this.props.navigation.navigate('LoginStackNavigator');
      }
    })
  }

  render() {
    return (
      <View style={s.container}>
        <ActivityIndicator size="large" color={colors.logoColor} />
      </View>
    )
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
}

export default LoadingScreen;


const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

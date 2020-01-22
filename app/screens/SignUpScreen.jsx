import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


class SignUpScreen extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text>SignUp</Text>
      </View>
    );
  }
}

export default SignUpScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

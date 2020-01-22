import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import CustomActionButton from '../components/CustomActionButton';
import colors from '../../assets/colors';


class Login extends Component {
  render() {
    return (
      <View style={s.container}>
        <TextInput style={s.textInput}
          placeholder="abc@gmail.com"
          placeholderTextcolor={colors.bgTextInputDark}
          keyboardType="email-address"
        />
        <TextInput style={s.textInput}
          placeholder="enter password"
          placeholderTextcolor={colors.bgTextInputDark}
          secureTextEntry
        />
        <View style={{ alignItems: 'center' }}>
          <CustomActionButton style={[s.loginButton, {borderColor: colors.bgPrimary}]}>
            <Text>Login</Text>
          </CustomActionButton>
          <CustomActionButton style={[s.loginButton, {borderColor: colors.bgError}]}>
            <Text>Sign Up</Text>
          </CustomActionButton>
        </View>

      </View>
    );
  }
}

export default Login;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgMain
  },
  textInput: {
    height: 50,
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    marginHorizontal: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: colors.txtBlack
  },
  loginButton: {
    borderWidth: 0.5,
    backgroundColor: 'transparent',
    marginTop: 10,
    width: 200
  }
});

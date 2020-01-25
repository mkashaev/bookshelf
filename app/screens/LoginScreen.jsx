import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator
} from 'react-native';
import CustomActionButton from '../components/CustomActionButton';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import colors from '../../assets/colors';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      isLoading: false
    }
  }

  handleOnSignIn = async () => {
    const { email, pass } = this.state;
    if (email && pass) {
      this.setState({ isLoading: true });
      try {
        const resp = await firebase.auth().signInWithEmailAndPassword(email, pass);
        if (resp) {
          this.setState({ isLoading: false });
          this.props.navigation.navigate('LoadingScreen');
        }
      } catch (err) {
        this.setState({ isLoading: false });
        switch(err.code) {
          case 'auth/user-not-found':
            alert('User does not exists. Try sing up');
            break;
          case 'auth/invalid-mail':
            alert('Please, enter a valid email address');
            break;
          default:
            alert('Something went wrong');
        }
      }
    } else {
      alert('Please enter email and password');
    }
  }

  handleOnSignUp = async () => {
    const { email, pass } = this.state;
    if (email && pass) {
      this.setState({ isLoading: true });
      try {
        const resp = await firebase.auth().createUserWithEmailAndPassword(email, pass);
        if (resp) {
          this.setState({ isLoading: false });
          this.props.navigation.navigate('LoadingScreen');
        }
      } catch (err) {
        this.setState({ isLoading: false });
        if (err.code === 'auth/email-already-in-use') {
          alert('User already Exists. Try login');
        }
        alert('Something went wrong');
        console.log('Err: ', err);
      }
    } else {
      alert('Please write email and password');
    }
  }

  render() {
    return (
      <View style={s.container}>
        {
          this.state.isLoading && 
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                elevation: 1000
              }
            ]}
          >
            <ActivityIndicator size="large" color={colors.bgTextInputDark} />
          </View>
        }
        <TextInput style={s.textInput}
          placeholder="abc@gmail.com"
          placeholderTextcolor={colors.bgTextInputDark}
          keyboardType="email-address"
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput style={s.textInput}
          placeholder="enter password"
          placeholderTextcolor={colors.bgTextInputDark}
          secureTextEntry
          onChangeText={(pass) => this.setState({pass})}
        />
        <View style={{ alignItems: 'center' }}>
          <CustomActionButton 
            style={[s.loginButton, {borderColor: colors.bgPrimary}]}
            onPress={this.handleOnSignIn}
          >
            <Text>Login</Text>
          </CustomActionButton>
          <CustomActionButton
            style={[s.loginButton, {borderColor: colors.bgError}]}
            onPress={this.handleOnSignUp}
          >
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

import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native';
import CustomActionButton from '../components/CustomActionButton';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import colors from '../../assets/colors';


class Settings extends Component {
  handleOnSignOut = async () => {
    try {
      await firebase.auth().signOut();
      this.props.navigation.navigate('WelcomeScreen');
    } catch (err) {
      alert('Unable to sing out right now.');
    }
  }

  render() {
    return (
      <View style={s.container}>
        <CustomActionButton
          style={{
            width: 200,
            backgroundColor: 'transparent',
            borderWidth: 0.5,
            borderColor: colors.bgError
          }}
          title="Sign Up"
          onPress={this.handleOnSignOut}
        >
          <Text style={{ fontWeight: '100' }}>Sign Out</Text>
        </CustomActionButton>
      </View>
    )
  }
}

export default Settings;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

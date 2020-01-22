import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native';
import CustomActionButton from '../components/CustomActionButton';
import colors from '../../assets/colors';


class Settings extends Component {
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
          onPress={() => this.props.navigation.navigate('WelcomeScreen')}
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

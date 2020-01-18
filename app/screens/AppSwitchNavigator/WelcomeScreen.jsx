import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomActionButton from '../../components/CustomActionButton';

import colors from '../../../assets/colors';


export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={s.container}>
        <View style={s.logoContainer}>
          <Ionicons name="md-bookmarks" size={150} color={colors.logoColor} />
          <Text style={s.title}>Book Shelf</Text>
        </View>
        <View style={s.buttonsContainer}>
          <CustomActionButton
            style={{
              width: 200,
              backgroundColor: 'transparent',
              borderWidth: 0.5,
              borderColor: colors.bgPrimary,
              marginBottom: 10
            }}
            title="Login"
            onPress={()=>{}}
          >
            <Text style={{ fontWeight: '100' }}>Login In</Text>
          </CustomActionButton>

          <CustomActionButton
            style={{
              width: 200,
              backgroundColor: 'transparent',
              borderWidth: 0.5,
              borderColor: colors.bgError
            }}
            title="Sign Up"
            onPress={()=>{}}
          >
            <Text style={{ fontWeight: '100' }}>Sign Up</Text>
          </CustomActionButton>
        </View>
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgMain
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
    fontWeight: '100'
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center'
  }
})
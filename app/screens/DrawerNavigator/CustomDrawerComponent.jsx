import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerItems } from 'react-navigation';
import colors from '../../../assets/colors';


class CustomDrawerComponent extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView/>
        <View style={s.logoView}>
          <Ionicons name="md-bookmarks" size={100} color={colors.logoColor} />
          <Text style={{
            fontSize: 24,
            color: 'black',
            fontWeight: '100'
          }}>
            Book Shelf
          </Text>
        </View>
        <DrawerItems {...this.props} />
      </ScrollView>
    )
  };
}

export default CustomDrawerComponent;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoView: {
    height: 150, 
    backgroundColor: colors.bgMain,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0
  }
});

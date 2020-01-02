import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const BookCount = (props) => {
  const { title, total } = props;
  return (
    <View style={styles.bottomButtons }>
      <Text style={styles.bottomButtonsText}>{ title }</Text>
      <Text>{ total }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomButtonsText: {
    fontSize: 20
  }
});

export default BookCount;

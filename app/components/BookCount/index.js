import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const BookCount = (props) => {
  const { title, total } = props;
  return (
    <View style={styles.bottomButtons }>
      <Text style={styles.bottomButtonsText}>{ title }</Text>
      <Text>{ total }</Text>
    </View>
  )
}

BookCount.propTypes = {
  total: PropTypes.number,
  title: PropTypes.string.isRequired
};

BookCount.defaultProps = {
  title: 'Title'
};

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

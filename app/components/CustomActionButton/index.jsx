import React, { Children } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';


function getPosition(position) {
  switch(position) {
    case 'left':
      return { position: 'absolute', left: 20, bottom: 20 };
    default:
      return { position: 'absolute', right: 20, bottom: 20 };
  }
}


const CustomActionButton = ({ children, onPress, style, position }) => {
  const floatingActionButton = position ? getPosition(position) : [];

  return (
    <TouchableOpacity
      style={floatingActionButton} 
      onPress={onPress}
    >
      <View style={[styles.button, style]}>
        { children }
      </View>
    </TouchableOpacity>
  )
}

CustomActionButton.propTypes = {
  children: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

CustomActionButton.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    backgroundColor: '#a5deba',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CustomActionButton;

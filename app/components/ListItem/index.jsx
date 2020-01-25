import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import colors from '../../../assets/colors';


const ListItem = ({ item, children }) => (
  <View style={s.listItemContainer}>
    <View style={s.imageContainer}>
      <Image 
        style={s.image}
        source={require('../../../assets/book.png')}
      />
    </View>
    <View style={{flex: 1, justifyContent: 'center', paddingLeft: 5}}>
      <Text style={s.listItemTitle}>{ item.name }</Text>
    </View>
    { children }
  </View>
)

export default ListItem;

const s = StyleSheet.create({
  listItemContainer: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  listItemTitle: {
    fontWeight: '100',
    fontSize: 22,

  },
  imageContainer: {
    height: 50,
    width: 50,
    marginLeft: 2
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 35
  },  
});

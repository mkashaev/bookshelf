import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BookCount from './app/components/BookCount';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCounter: 0,
      readingCounter: 0,
      readCounter: 0
    };
  }

  render() {
    const { totalCounter, readingCounter, readCounter } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView />
          <View style={styles.header}>
            <Text style={styles.title}>Book Worm</Text>
          </View>
          <View style={{ flex: 1}}>
            <View style={{ height: 50, flexDirection: 'row' }}>
              <TextInput
                style={{
                  flex: 1,
                  backgroundColor: '#ececec',
                  paddingLeft: 5
                }}
                placeholder="Enter book name"
                placeholderTextColor="gray"
              />
              <TouchableOpacity>
                <View style={{
                  height: 50,
                  width: 50,
                  backgroundColor: '#a5deba',
                  alignItems: 'center',
                  justifyContent: 'center' 
                }}>
                  <Ionicons name="md-checkmark" color="white" size={32} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{
                  height: 50,
                  width: 50,
                  backgroundColor: '#deada5',
                  alignItems: 'center',
                  justifyContent: 'center' 
                }}>
                  <Ionicons name="md-close" color="white" size={32} />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 20,
                right: 20
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: 'blue',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Ionicons name="md-add" color="white" size={32} />
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={styles.bottom}>
            <BookCount title="Total" total={totalCounter} />
            <BookCount title="Reading" total={readingCounter} />
            <BookCount title="Read" total={readCounter} />
          </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E9E9E9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24
  },
  content: {
    flex: 1
  },
  bottom: {
    height: 70,
    borderTopWidth: 0.5,
    borderTopColor: '#E9E9E9',
    flexDirection: 'row'
  }
});

export default App;
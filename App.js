import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BookCount from './app/components/BookCount';
import CustomActionButton from './app/components/CustomActionButton';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCounter: 0,
      readingCounter: 0,
      readCounter: 0,
      isAddBookVisible: false,
      textInput: '',
      books: []
    };
  }

  showAddNewBook = () => {
    this.setState((state) => ({
      isAddBookVisible: !state.isAddBookVisible,
    }));
  }

  addBook = (book) => {
    this.setState((state, props) => ({
      books: [...state.books, book],
      totalCounter: state.totalCounter + 1,
      readingCounter: state.readCounter + 1 
    }), () => {
      console.log(this.state.books);
    });
  }

  markAsRead = (selectedBook, index) => {
    let newList = this.state.books.filter((book) => book !== selectedBook);
    this.setState((state) => ({
      books: newList,
      readingCounter: state.readingCounter - 1,
      readCounter: state.readCounter - 1
    }));
  }

  renderItem = (item, index) => (
    <View style={{ height: 50, flexDirection: 'row' }}>
      <View style={{flex: 1, justifyContent: 'center', paddingLeft: 5}}>
        <Text>{ item }</Text>
      </View>
      <CustomActionButton
        style={{ width: 100, backgroundColor: '#a5deba'}}
        onPress={() => this.markAsRead(item, index)}
      >
        <Text style={{ fontWeight: 'bold', color: 'white'}}>Mark as Read</Text>
      </CustomActionButton>
    </View>
  )

  render() {
    const { 
      totalCounter, 
      readingCounter, 
      readCounter, 
      textInput,
      books
    } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView />
          <View style={styles.header}>
            <Text style={styles.title}>Book Worm</Text>
          </View>
          <View style={{ flex: 1}}>
            { this.state.isAddBookVisible && (
              <View style={{ height: 50, flexDirection: 'row' }}>
                <TextInput
                  onChangeText={(text) => this.setState({textInput: text})}
                  style={{
                    flex: 1,
                    backgroundColor: '#ececec',
                    paddingLeft: 5
                  }}
                  placeholder="Enter book name"
                  placeholderTextColor="gray"
                />
                <CustomActionButton
                  style={{backgroundColor: '#a5deba'}}
                  onPress={() => this.addBook(textInput)}
                >
                  <Ionicons name="md-checkmark" color="white" size={32} />
                </CustomActionButton>
                <CustomActionButton
                  style={{backgroundColor: '#deada5'}}
                  onPress={this.showAddNewBook}
                >
                  <Ionicons name="md-close" color="white" size={32} />
                </CustomActionButton>
              </View>
            )}

            <FlatList
              data={books}
              renderItem={({ item }, i) => this.renderItem(item, i)}
              keyExtractor={(item, i) => i.toString()}
              ListEmptyComponent={
                <View style={styles.emptyList}>
                  <Text style={{fontWeight: 'bold'}}>Not Reading Any Books.</Text>
                </View>
              }
            />
            <CustomActionButton
              position="right"
              style={{ backgroundColor: 'blue', borderRadius: 25 }}
              onPress={this.showAddNewBook}
            >
              <Ionicons name="md-add" color="white" size={32} />
            </CustomActionButton>
            {/* <TouchableOpacity
              onPress={this.showAddNewBook}
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
            </TouchableOpacity> */}
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
  emptyList: {
    marginTop: 50, 
    alignItems: 'center'
  },
  bottom: {
    height: 70,
    borderTopWidth: 0.5,
    borderTopColor: '#E9E9E9',
    flexDirection: 'row'
  }
});

export default App;
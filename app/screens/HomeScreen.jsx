import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BookCount from '../components/BookCount';
import CustomActionButton from '../components/CustomActionButton';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { snapshotToArray } from '../utils/firebaseHelper';
import colors from '../../assets/colors';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      isAddBookVisible: false,
      textInput: '',
      books: [],
      booksReading: [],
      booksRead: []
    };
  }

  componentDidMount = async () => {
    this.getCurrentUser();
  }

  getCurrentUser = async () => {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const currentUserData = await firebase
      .database()
      .ref('users')
      .child(user.uid)
      .once('value');

    const books = await firebase
      .database()
      .ref('books')
      .child(user.uid)
      .once('value')

    const booksArray = snapshotToArray(books);
    
    this.setState({
      currentUser: currentUserData.val(),
      books: booksArray,
      booksReading: booksArray.filter((book) => !book.read),
      booksRead: booksArray.filter((book) => book.read)
    });
  }

  showAddNewBook = () => {
    this.setState((state) => ({
      isAddBookVisible: !state.isAddBookVisible,
    }));
  }

  addBook = async (book) => {
    try {
      const snapshot = await firebase
        .database()
        .ref('books')
        .child(this.state.currentUser.uid)
        .orderByChild('name')
        .equalTo(book)
        .once('value');

      console.log('S type: ', typeof snapshot);

      if (snapshot.exists()) {
        console.log('Snap: ', snapshot);
        alert('Unable to add as book already exists');
      } else {
        const { key } = await firebase
        .database()
        .ref('books')
        .child(this.state.currentUser.uid)
        .push();

        await firebase
          .database()
          .ref('books')
          .child(this.state.currentUser.uid)
          .child(key)
          .set({ name: book, read: false });

        this.setState((state) => ({
          books: [...state.books, {name: book, read: false}],
          booksReading: [...state.booksReading, {name: book, read: false}],
          isAddNewBookVisible: false,
        }))
      }
    } catch(err) {
      alert(err);
      console.log(err);
    }
  }

  markAsRead = (selectedBook, index) => {
    let books = this.state.books.map((book) => {
      if (book.name === selectedBook.name) {
        return {...book, read: true};
      }
      return book;
    });

    let booksReading = this.state.booksReading.filter(
      (book) => book.name !== selectedBook.name
    );
    this.setState((state) => ({
      books,
      booksReading,
      booksRead: [
        ...state.booksRead,
        {name: selectedBook.name, read: true}
      ]
    }));
  }

  renderItem = (item, index) => (
    <View style={{ height: 50, flexDirection: 'row' }}>
      <View style={{flex: 1, justifyContent: 'center', paddingLeft: 5}}>
        <Text>{ item.name }</Text>
      </View>
      { console.log('Item: ', item)}
      {
        item.read ? (
          <Ionicons name="md-checkmark" color={colors.logoColor} size={42} />
        )
        : (
          <CustomActionButton
            style={{ width: 100, backgroundColor: '#a5deba'}}
            onPress={() => this.markAsRead(item, index)}
          >
            <Text style={{ fontWeight: 'bold', color: 'white'}}>Mark as Read</Text>
          </CustomActionButton>
        )
      }

    </View>
  )

  render() {
    const { 
      textInput,
      books,
      booksReading,
      booksRead
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
          </View>
          
          <View style={styles.bottom}>
            <BookCount title="Total" total={books.length} />
            <BookCount title="Reading" total={booksReading.length} />
            <BookCount title="Read" total={booksRead.length} />
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

export default HomeScreen;

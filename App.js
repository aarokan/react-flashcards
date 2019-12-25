import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView'
import Quiz from './components/Quiz'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AddDeck /> */}
      {/* <DeckList /> */}
      {/* <DeckView /> */}
      <Quiz />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
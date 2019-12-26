import React, { Component } from 'react'
import { StyleSheet, Alert, View, Text, FlatList } from 'react-native'
import { getDecksInfo } from '../utils/helpers'
import DeckSummary from './DeckSummary'

export default class DeckList extends Component {
  cardNav = () => {
    console.log('cardNav')
    Alert.alert(
      'You need to...'
   )
  }

  render() {
    const decks = getDecksInfo()

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Decks</Text>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <DeckSummary
              onPress={this.cardNav}
              title={item.title}
              cardCount={item["questions"].length}
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize:28,
    marginBottom: 20,
  },
});
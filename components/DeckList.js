import React, { Component } from 'react'
import { StyleSheet, Alert, View, Text, FlatList } from 'react-native'
import {connect} from 'react-redux';
import { getDecksInfo } from '../utils/helpers'
import { receiveDecks } from '../actions/index';
import { fetchDecks } from '../utils/api'
import DeckSummary from './DeckSummary'

class DeckList extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    fetchDecks().then(decks => dispatch(receiveDecks(decks)))
        .then(() => 
            this.setState(
                () => ({ready: true})
            )
        );
  } 

  render() {
    // const decks = getDecksInfo()
    const decks = this.props.decks

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Decks</Text>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <DeckSummary
              onPress={() => this.props.navigation.navigate('DeckView', item)}
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

function mapStateToProps(state) {
  return {
      decks: state,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize:28,
    marginTop: 30,
    marginBottom: 20,
  },
});

export default connect(mapStateToProps)(DeckList)
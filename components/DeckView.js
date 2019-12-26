import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { getDecksInfo } from '../utils/helpers'
import { lightPurp, purple, white } from '../utils/colors';

export default class DeckView extends Component {
  addCard = () => {
    // Add card
  }

  startQuiz = () => {
    // Start Quiz
  }

  render() {
    const deck = getDecksInfo('React')

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={{color:white}}>{deck["questions"].length} Cards</Text>
        </View>
        <View>
          <TouchableOpacity 
            style={styles.addCardBtn}
            onPress={this.addCard}>
              <Text style={styles.addCardBtnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.startBtn} 
            onPress={this.startQuiz}>
              <Text style={styles.startBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
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
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginBottom: 30,
    backgroundColor: lightPurp,
    borderRadius: 7,
  },
  title: {
    fontSize:28,
    marginBottom: 10,
    color: white,
  },
  addCardBtn: {
    borderColor: purple,
    borderWidth: 5,
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
  },
  startBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
  },
  startBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  addCardBtnText: {
    fontSize: 22,
    textAlign: 'center',
  }
});
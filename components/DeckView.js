import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getDecksInfo } from '../utils/helpers'

export default class DeckList extends Component {
  addCard = () => {
    // Add card
  }

  startQuiz = () => {
    // Start Quiz
  }

  render() {
    const deck = getDecksInfo('React')

    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck["questions"].length} Cards</Text>
        <TouchableOpacity 
          onPress={this.addCard}>
            <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={this.startQuiz}>
            <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
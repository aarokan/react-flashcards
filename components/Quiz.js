import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getDecksInfo } from '../utils/helpers'

export default class Quiz extends Component {
  state = {
    questionNumber: 0,
    showQuestion: false,
    correct: 0,
    incorrect: 0
  }

  alterShowAnswer = () => {
    this.state.showQuestion 
      ? this.setState({ showQuestion: false })
      : this.setState({ showQuestion: true })
  }

  submitAnswer = (answer) => {
    if (answer === 'correct') {
      this.setState({ correct: this.state.correct + 1 })
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 })
    }
  }

  render() {
    const deck = getDecksInfo('React')
    const questionNumber = this.state.questionNumber
    const number = this.state.questionNumber + 1

    return (
      <View>
        <View>
          <Text>{number} / {deck["questions"].length}</Text>
          {!this.state.showQuestion
            ? <View>
                <Text>{deck["questions"][questionNumber].question}</Text>
                <TouchableOpacity 
                  onPress={this.alterShowAnswer}>
                    <Text>Show Answer</Text>
                </TouchableOpacity>
              </View>
            : <View>
                <Text>{deck["questions"][questionNumber].answer}</Text>
                <TouchableOpacity 
                  onPress={this.alterShowAnswer}>
                    <Text>Show Question</Text>
                </TouchableOpacity>
              </View>
          }
        </View>
        <View>
          <TouchableOpacity 
            onPress={() => this.submitAnswer('correct')}>
              <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.submitAnswer('incorrect')}>
              <Text>Incorrect</Text>
          </TouchableOpacity>
          <Text>correct: {this.state.correct}</Text>
          <Text>incorrect: {this.state.incorrect}</Text>
        </View>
      </View>
    )
  }
}
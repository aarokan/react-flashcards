import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { getDecksInfo } from '../utils/helpers'
import { lightPurp, green, orange, red, white } from '../utils/colors';

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
            ? <View style={styles.card}>
                <Text style={styles.title}>{deck["questions"][questionNumber].question}</Text>
                <TouchableOpacity 
                  onPress={this.alterShowAnswer}>
                    <Text style={{color:white}}>Show Answer</Text>
                </TouchableOpacity>
              </View>
            : <View style={styles.answerCard}>
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
            style={styles.correctBtn} 
            onPress={() => this.submitAnswer('correct')}>
              <Text style={styles.submitBtnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.incorrectBtn} 
            onPress={() => this.submitAnswer('incorrect')}>
              <Text style={styles.submitBtnText}>Incorrect</Text>
          </TouchableOpacity>
          <Text>correct: {this.state.correct}</Text>
          <Text>incorrect: {this.state.incorrect}</Text>
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
    backgroundColor: orange,
    borderRadius: 7,
  },
  answerCard: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginBottom: 30,
    borderColor: orange,
    borderWidth: 5,
    borderRadius: 7,
  },
  title: {
    fontSize:28,
    marginBottom: 10,
    color: white,
  },
  correctBtn: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
  },
  incorrectBtn: {
    backgroundColor: red,
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
});
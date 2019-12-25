import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity,  } from 'react-native'

export default class AddCard extends Component {
  state = {
    questionInput: '',
    answerInput: ''
  }

  handleQuestionTextChange = (questionInput) => {
    this.setState(() => ({
      questionInput
    }))
  }

  handleAnswerTextChange = (answerInput) => {
    this.setState(() => ({
      answerInput
    }))
  }

  createCard = () => {
    // Update Redux

    this.setState(() => ({ 
        questionInput: '',
        answerInput: ''
    }))

    // Navigate to Deck

    // Save to "DB"
  }
  
  render() {
    const { questionInput, answerInput } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View>
          <Text>{JSON.stringify(questionInput)}</Text>
          <Text>Enter the Question</Text>
          <TextInput 
            style={styles.inputStyle}
            value={questionInput}
            onChangeText={this.handleQuestionTextChange}
          />
          <Text>{JSON.stringify(answerInput)}</Text>
          <Text>Enter the Answer</Text>
          <TextInput 
            style={styles.inputStyle}
            value={answerInput}
            onChangeText={this.handleAnswerTextChange}
          />
          <TouchableOpacity 
            onPress={this.createCard}>
              <Text>Create Card</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputStyle: {
    backgroundColor: '#ccc',
  },
});
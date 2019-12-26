import React, { Component } from 'react'
import { 
  StyleSheet, 
  KeyboardAvoidingView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity  
} from 'react-native'
import { purple, white } from '../utils/colors';

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
            style={styles.submitBtn}
            onPress={this.createCard}>
              <Text style={styles.submitBtnText}>Create Card</Text>
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
  submitBtn: {
    backgroundColor: purple,
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
import React, { Component } from 'react'
import { 
  StyleSheet, 
  KeyboardAvoidingView, 
  Text, 
  TextInput, 
  TouchableOpacity 
} from 'react-native'
import { purple, white } from '../utils/colors';

function CreateDeckBtn ({ onPress }) {
  return (
    <TouchableOpacity 
      style={styles.submitBtn}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>Create Deck</Text>
    </TouchableOpacity>
  )
}

export default class AddDeck extends Component {
  state = {
    input: ''
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }

  createDeck = () => {
    const entry = this.state

    // Update Redux

    this.setState(() => ({ input: '' }))

    // Navigate to Deck

    // Save to "DB"
  }
  
  render() {
    const { input } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>{JSON.stringify(input)}</Text>
        <Text style={styles.title}>Add Deck</Text>
        <Text style={styles.text}>What is the Title of Your New Deck</Text>
        <TextInput 
          style={styles.inputStyle}
          value={input}
          onChangeText={this.handleTextChange}
        />
        <CreateDeckBtn onPress={this.createDeck} />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize:28,
    marginBottom: 20,
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
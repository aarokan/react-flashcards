import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView, Text, TextInput, TouchableOpacity,  } from 'react-native'

function CreateDeckBtn ({ onPress }) {
  return (
    <TouchableOpacity 
      onPress={onPress}>
        <Text>Create Deck</Text>
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
        <Text>Add Deck</Text>
        <Text>What is the Title of Your New Deck</Text>
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
  inputStyle: {
    backgroundColor: '#ccc',
  },
});
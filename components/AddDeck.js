import React, { Component } from 'react'
import { 
  StyleSheet, 
  View,
  KeyboardAvoidingView, 
  Text, 
  TextInput, 
  TouchableOpacity 
} from 'react-native'
import { purple, white } from '../utils/colors';
import { saveDeckTitle } from '../utils/api'
import { addNewDeck } from '../actions/index'

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

    // saveDeckTitle(entry)
    // this.props.dispatch(addNewDeck(entry))

    this.setState(() => ({ input: '' }))

    // Navigate to Deck

    // this.props.navigation.navigate('DeckView', {eb ???})
  }
  
  render() {
    const { input } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>{JSON.stringify(input)}</Text>
        <Text style={styles.title}>Add Deck</Text>
        <Text style={styles.text}>What is the Title of Your New Deck</Text>
        <View>
          <TextInput 
            style={styles.inputStyle}
            value={input}
            onChangeText={this.handleTextChange}
          />
        </View>
        <CreateDeckBtn onPress={this.createDeck} />
      </KeyboardAvoidingView>
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
  inputStyle: {
    backgroundColor: '#ccc',
    width: 250
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
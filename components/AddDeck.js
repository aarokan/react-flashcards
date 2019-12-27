import React, { Component } from 'react'
import { 
  StyleSheet, 
  View,
  KeyboardAvoidingView, 
  Text, 
  TextInput,
  Alert, 
  TouchableOpacity 
} from 'react-native'
import {connect} from 'react-redux';
import { purple, white } from '../utils/colors';
import { addDeck } from '../utils/api'
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

class AddDeck extends Component {
  componentWillMount() {
    this.setState({
      input: '',
      errorMessage: false,
    })
  }
  
  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }

  createDeck = () => {
    const entry = this.state;
    const {decks} = this.props;

    if (entry.input.length < 1) {
      Alert.alert(
        'Error!',
        'Deck must have a Title !'
      );
    } else if (!entry.input) {this.setState({errorMessage: true})}
    else {
      if (decks[entry.input]) {
        Alert.alert(
          'Error!',
          'This Deck already Exists !'
        );
      } else {
        const newDeck = {[entry.input]: {title: entry.input, questions: []}};

        this.props.dispatch(addNewDeck(newDeck));
        addDeck(newDeck);

        Alert.alert(
          'Great!', 'Deck Added',
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate('DeckView', {
              title: entry.input,
              questions : []
            })},
          ],
        );

        this.setState({input: ''});
      }
    }
  };

  
  render() {
    const { input } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
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

function mapStateToProps(state) {
  return {
      decks: state,
  };
}

export default connect(mapStateToProps)(AddDeck);
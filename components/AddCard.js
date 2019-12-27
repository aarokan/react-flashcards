import React, { Component } from 'react'
import { 
  StyleSheet, 
  KeyboardAvoidingView, 
  View, 
  Text, 
  TextInput,
  Alert, 
  TouchableOpacity  
} from 'react-native'
import {addNewCard} from '../actions';
import {connect} from 'react-redux';
import {addCard} from '../utils/api';
import { purple, white } from '../utils/colors';

class AddCard extends Component {
  state = {
    questionInput: '',
    answerInput: '',
    errorMessage: false
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
    const {questionInput, answerInput} = this.state;
    const {title, questions} = this.props.navigation.state.params;
    const params = {title, questions, questionInput, answerInput};

    if ((questionInput.length < 1 || answerInput.length < 1)) {
      Alert.alert(
        'Error!',
        'Card must have a Question and an Answer !'
      );
      return
    } else if (questionInput && answerInput) {
        this.setState({
          errorMessage: false,
          questionInput: ''
        });
        Alert.alert('Awsome !', 'New Card Created !',
        [
          {
            text: 'OK', onPress: () =>
            this.props.navigation.goBack()
          }
        ],)
    }
    else {
      this.setState({ errorMessage: true })
    }

    this.props.dispatch(addNewCard(params));

    addCard({
      card: {questionInput, answerInput},
      deckName: title
    });
  };

  
  render() {
    const { questionInput, answerInput } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
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
    alignItems: 'center'
  },
  inputStyle: {
    backgroundColor: '#ccc',
    width: 250,
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

export default connect(mapStateToProps)(AddCard);
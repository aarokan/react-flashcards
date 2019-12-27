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
import {addNewCard} from '../actions/index';
import {connect} from 'react-redux';
import {addCard} from '../utils/api';
import { purple, white } from '../utils/colors';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
    errorMessage: false
  }

  handleQuestionTextChange = (question) => {
    this.setState(() => ({
      question
    }))
  }

  handleAnswerTextChange = (answer) => {
    this.setState(() => ({
      answer
    }))
  }

  createCard = () => {
    const {question, answer} = this.state;
    const {title, questions} = this.props.navigation.state.params;
    const params = {title, questions, question, answer};

    if ((question.length < 1 || answer.length < 1)) {
      Alert.alert(
        'Error!',
        'Card must have a Question and an Answer !'
      );
      return
    } else if (question && answer) {
        this.setState({
          errorMessage: false,
          question: ''
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
      card: {question, answer},
      deckName: title
    });
  };

  
  render() {
    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <Text>Enter the Question</Text>
          <TextInput 
            style={styles.inputStyle}
            value={question}
            onChangeText={this.handleQuestionTextChange}
          />
          <Text>Enter the Answer</Text>
          <TextInput 
            style={styles.inputStyle}
            value={answer}
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
    marginBottom: 10,
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
import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { getDecksInfo } from '../utils/helpers'
import { purple, green, orange, red, white } from '../utils/colors';

export default class Quiz extends Component {
  state = {
    index: 0,
    showQuestion: false,
    correct: 0,
  }

  navigateBack = () => {
    this.props.navigation.goBack();
  }

  startQuiz = () => {
    this.setState({
      index: 0, 
      showQuestion: false,
      correct: 0, 
    });
  };

  alterShowAnswer = () => {
    this.state.showQuestion 
      ? this.setState({ showQuestion: false })
      : this.setState({ showQuestion: true })
  }

  correctAnswer = () => {
    const {index, correct} = this.state;
    this.setState({
        index: index + 1, 
        correct: correct + 1, 
        showQuestion: false
    });
};

incorrectAnswer = () => {
    this.setState({index: this.state.index + 1});
};

  render() {
    // const deck = getDecksInfo('React')
    // const index = this.state.index
    // const number = this.state.index + 1

    const { index, correct } = this.state;
    const { questions } = this.props.navigation.state.params;
    const haveQuestions = index < questions.length;

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {haveQuestions 
            ? (<View>
                <Text style={{marginLeft:30}}>{index + 1} / {questions.length}</Text>
                {!this.state.showQuestion
                  ? <View style={styles.card}>
                      <Text style={styles.title}>{questions[index].question}</Text>
                      <TouchableOpacity 
                        onPress={this.alterShowAnswer}>
                          <Text style={{color:white}}>Show Answer</Text>
                      </TouchableOpacity>
                    </View>
                  : <View style={styles.answerCard}>
                      <Text>{questions[index].answer}</Text>
                      <TouchableOpacity 
                        onPress={this.alterShowAnswer}>
                          <Text style={{marginTop:10}}>Show Question</Text>
                      </TouchableOpacity>
                    </View>
                }
                <View>
                  <TouchableOpacity
                    style={styles.correctBtn} 
                    onPress={this.correctAnswer}>
                      <Text style={styles.submitBtnText}>Correct</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.incorrectBtn} 
                    onPress={this.incorrectAnswer}>
                      <Text style={styles.submitBtnText}>Incorrect</Text>
                  </TouchableOpacity>
                </View>
              </View>)
            : (<View style={styles.container}>
                <Text style={[styles.title, {color:'black'}]}>Quiz Completed</Text>
                <Text>You got {correct} out of {questions.length}</Text>
                <View>
                  <TouchableOpacity 
                    style={styles.returnAgainBtn}
                    onPress={this.startQuiz}>
                    <Text style={styles.returnBtnText}>Start Quiz</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.returnAgainBtn}
                    onPress={this.navigateBack}>
                    <Text style={styles.returnBtnText}>Return to Deck</Text>
                  </TouchableOpacity>
                </View>
              </View>)
          }
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
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: orange,
    borderRadius: 7,
  },
  answerCard: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
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
    width: 300
  },
  incorrectBtn: {
    backgroundColor: red,
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    width: 300
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  returnAgainBtn: {
    borderColor: purple,
    borderWidth: 5,
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
  },
  returnBtnText: {
    fontSize: 22,
    textAlign: 'center',
  },
});
import React, { Component } from 'react'
import {connect} from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { getDecksInfo } from '../utils/helpers'
import { lightPurp, purple, white } from '../utils/colors';

class DeckView extends Component {
  render() {
    const {title} = this.props.navigation.state.params;
    const questions = this.props.decks[title] && this.props.decks[title].questions;

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{color:white}}>{questions && questions.length} Cards</Text>
        </View>
        <View>
          <TouchableOpacity 
            style={styles.addCardBtn}
            onPress={() => {
              this.props.navigation.navigate('AddCard', {
                title,
                questions,
              });
          }}>
              <Text style={styles.addCardBtnText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.startBtn} 
            onPress={() => {
              this.props.navigation.navigate('Quiz', {
                title,
                questions,
              });
          }}>
              <Text style={styles.startBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
      decks: state,
  };
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
    backgroundColor: lightPurp,
    borderRadius: 7,
  },
  title: {
    fontSize:28,
    marginBottom: 10,
    color: white,
  },
  addCardBtn: {
    borderColor: purple,
    borderWidth: 5,
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
  },
  startBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
  },
  startBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  addCardBtnText: {
    fontSize: 22,
    textAlign: 'center',
  }
});

export default connect(mapStateToProps)(DeckView)
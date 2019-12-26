import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { lightPurp, white } from '../utils/colors';

export default function DeckSummary ({ onPress, title, cardCount }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{cardCount} Cards</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
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
  text: {
    color: white,
  }
});
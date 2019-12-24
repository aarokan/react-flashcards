import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function DeckSummary ({ onPress, title, cardCount }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
      <Text>{cardCount}</Text>
    </TouchableOpacity>
  )
}
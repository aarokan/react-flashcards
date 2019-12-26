import { AsyncStorage } from 'react-native'

const initialDecks = {
  HTML: {
    title: 'HTML',
    questions: [
      {
        question: 'What is HTML?',
        answer: 'Hypertext Markup Language'
      },
      {
        question: 'What is a marquee?',
        answer: 'A marquee allows you to put a scrolling text in a web page'
      },
    ]
  },
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A JavaScript library for building user interfaces'
      },
      {
        question: 'What is JSX?',
        answer: 'JSX is a shorthand for JavaScript XML'
      },
      {
        question: 'How can you update the state of a component?',
        answer: 'State of a component can be updated using this.setState()'
      },
    ]
  }
}
  
export const getData = () => {
  return initialDecks
}

// const DECKS_STORAGE_KEY = 'UdaciCards:decks'

// export function getDecks (deck) {
//   return AsyncStorage.getItem(DECKS_STORAGE_KEY)
//   .then((results) => {
//     if ( results === null) {
//       AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
//       return initialDecks
//     } else {
//       return JSON.parse(results)
//     }
//   })
// }

// export function getDecks (deck) {
//   return AsyncStorage.getItem(DECKS_STORAGE_KEY, JSON.stringify({
//     [title]: {
//       title: title,
//       questions: []
//     }
//   }))
// }
  


export function removeEntry (key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
} 

{ /* 
import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'UdaciCards:decks'

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry (key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
} 

*/ }
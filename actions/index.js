export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_NEW_CARD = 'ADD_NEW_CARD'

export function addNewDeck (deck) {
  return {
    type: ADD_NEW_DECK,
    deck
  }
}

export function ReceiveDeckS (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addNewCard (card) {
  return {
    type: ADD_NEW_CARD,
    card
  }
}
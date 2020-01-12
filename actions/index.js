  
import { getAllDecks } from '../utils/api';

export const RECEIVED_DECKS = 'RECEIVED_DECKS';
export const ADD_DECK = 'ADD_DECK';

export function receivedDecks(decks) {
  return {
    type: RECEIVED_DECKS,
    decks
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  };
}

export function handlAppLoadData() {
  return dispatch => {
    return getAllDecks().then(decks => {
      dispatch(receivedDecks(decks));
    });
  };
}
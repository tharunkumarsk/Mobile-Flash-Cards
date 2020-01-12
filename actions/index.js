  
import { getAllDecks } from '../utils/api';

export const RECEIVED_DECKS = 'RECEIVED_DECKS';

export function receivedDecks(decks) {
  return {
    type: RECEIVED_DECKS,
    decks
  };
}

export function handlAppLoadData() {
  return dispatch => {
    return getAllDecks().then(decks => {
      dispatch(receivedDecks(decks));
    });
  };
}
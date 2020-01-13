import { getAllDecks, resetDecks, deleteDeck } from "../utils/api";

export const RECEIVED_DECKS = "RECEIVED_DECKS";
export const ADD_DECK = "ADD_DECK";
export const RESET_DECKS = "RESET_DECKS";
export const DELETE_DECK = "DELETE_DECK";

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
function resetDecksTodefault() {
  return {
    type: RESET_DECKS
  };
}
export function handleResetAppData() {
  return dispatch => {
    return resetDecks().then(() => {
      dispatch(resetDecksTodefault());
    });
  };
}

export function deleteDeckWith(id) {
  return dispatch => {
    return deleteDeck(id).then(() => {
      dispatch(deleteDeckfromStore(id));
    });
  };
}

export function deleteDeckfromStore(id) {
  return {
    type: DELETE_DECK,
    id
  };
}

import {
  getAllDecks,
  resetDecks,
  deleteDeck,
  addCardToDeck
} from "../utils/api";

export const RECEIVED_DECKS = "RECEIVED_DECKS";
export const ADD_DECK = "ADD_DECK";
export const RESET_DECKS = "RESET_DECKS";
export const DELETE_DECK = "DELETE_DECK";
export const ADD_CARD = "ADD_CARD";

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

export function addCardToDeckStore(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card
  };
}
export function addQuestionsToDeck(deckId, card) {
  return dispatch => {
    return addCardToDeck(deckId, card).then(() => {
      dispatch(addCardToDeckStore(deckId, card));
    });
  };
}

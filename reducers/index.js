import {
  RECEIVED_DECKS,
  ADD_DECK,
  RESET_DECKS,
  DELETE_DECK,
  ADD_CARD
} from "../actions/index";
import { decks as StubData } from "../utils/stub";

export default function decks(state = StubData, action) {
  switch (action.type) {
    case RECEIVED_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      const { title } = action;
      return {
        ...state,
        [title]: {
          title,
          questions: []
        }
      };
    case RESET_DECKS:
      return StubData;
    case DELETE_DECK:
      const { id } = action;
      delete state[id];
      return { ...state };
    case ADD_CARD:
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: [...state[deckId].questions].concat(card)
        }
      };
    default:
      return state;
  }
}

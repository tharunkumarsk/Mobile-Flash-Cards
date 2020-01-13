import {
  RECEIVED_DECKS,
  ADD_DECK,
  RESET_DECKS,
  DELETE_DECK
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
      // return ({ [id]: value, ...remainingDecks } = state);
      const { [id]: value, ...remainingDecks } = state;
      // console.log(remainingDecks);
      return remainingDecks;
    default:
      return state;
  }
}

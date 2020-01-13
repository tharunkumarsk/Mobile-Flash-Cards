import { RECEIVED_DECKS, ADD_DECK, RESET_DECKS } from "../actions/index";
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
    default:
      return state;
  }
}

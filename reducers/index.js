import {
    RECEIVED_DECKS,
    ADD_DECK
  } from '../actions/index';

  
  export default function decks(state = {}, action) {
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
        default:
          return state;
      }
  }
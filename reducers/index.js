import {
    RECEIVED_DECKS,
  } from '../actions/index';

  
  export default function decks(state = {}, action) {
    switch (action.type) {
      case RECEIVED_DECKS:
        return {
          ...state,
          ...action.decks
        };
      default:
        return state;
    }
  }
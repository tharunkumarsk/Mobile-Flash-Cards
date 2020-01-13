import appReducer from "../../reducers/index";
import { decks as StubData } from "../../utils/stub";

describe("the app redecer", () => {
  let initialState = {};
  let receivedDecks = {
    React: {
      title: "React",
      questions: [
        {
          question: "some X",
          answer: "some y"
        }
      ]
    }
  };

  it("returns proper initial state", () => {
    expect(appReducer(undefined, {})).toEqual(initialState);
  });

  it("RECEIVED_DECKS", () => {
    expect(
      appReducer(receivedDecks, {
        type: "RECEIVED_DECKS",
        payload: receivedDecks
      })
    ).toEqual({
      React: {
        title: "React",
        questions: [
          {
            question: "some X",
            answer: "some y"
          }
        ]
      }
    });
  });
  it("ADD_DECK", () => {
    expect(
      appReducer(initialState, {
        type: "ADD_DECK",
        title: "new deck"
      })
    ).toEqual({
      "new deck": {
        title: "new deck",
        questions: []
      }
    });
  });

  it("RESET_DECKS", () => {
    expect(
      appReducer(receivedDecks, {
        type: "RESET_DECKS"
      })
    ).toEqual(StubData);
  });
});

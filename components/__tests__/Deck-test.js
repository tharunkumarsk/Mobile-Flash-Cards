import React from 'react';
import renderer from 'react-test-renderer';

import  Deck from '../Deck';

it(`renders correctly for odd numbers of cards`, () => {
  const tree = renderer.create(<Deck
    title = "Test"
    cardsCount = {2}
    cardId = {1}
  ></Deck>).toJSON();

  expect(tree).toMatchSnapshot();
});
it(`renders correctly for even numbers of cards`, () => {
  const tree = renderer.create(<Deck
    title = "Test"
    cardsCount = {2}
    cardId = {8}
  ></Deck>).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import {StyledInputView}  from '../StyledInputView';

it(`renders correctly the input view`, () => {
  const tree = renderer.create(<StyledInputView
    handleChange={ handleSubmit = () => {}}
    handleSubmit={ handleSubmit = () => {}}
    text = "Deck name"
    >
    Snapshot test!</StyledInputView>).toJSON();

  expect(tree).toMatchSnapshot();
});
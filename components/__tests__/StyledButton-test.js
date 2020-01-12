import React from 'react';
import renderer from 'react-test-renderer';

import StyledButton  from '../StyledButton';

it(`renders correctly the primary button`, () => {
  const tree = renderer.create(<StyledButton
    onPress={ handleSubmit = () => {}}
    BtnStyle = "btnPrimary"
    >
    Snapshot test!</StyledButton>).toJSON();

  expect(tree).toMatchSnapshot();
});
it(`renders correctly the secondary button`, () => {
  const tree = renderer.create(<StyledButton
    onPress={ handleSubmit = () => {}}
    BtnStyle = "btnSecondary"
    >
    Snapshot test!</StyledButton>).toJSON();

  expect(tree).toMatchSnapshot();
});
it(`renders correctly the disabled button`, () => {
  const tree = renderer.create(<StyledButton
    onPress={ handleSubmit = () => {}}
    BtnStyle = "btnDisabled"
    >
    Snapshot test!</StyledButton>).toJSON();

  expect(tree).toMatchSnapshot();
});

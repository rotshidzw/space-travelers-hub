import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../store';
import Profile from '../components/Profile/Profile';

it('Test if my_profile renderers correctly', () => {
  const missions = [];
  const rockets = [];
  const tree = renderer.create(
    <Provider store={store}>
      <Profile missions={missions} rockets={rockets} />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

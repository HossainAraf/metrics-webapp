import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../components/Home';

describe('Home Component Snapshot', () => {
  it('should match the snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

test('renders App component without errors', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});

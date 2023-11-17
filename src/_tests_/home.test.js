import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import the Provider
import store from '../redux/store';
import Home from '../components/Home';

test('renders Home component', () => {
  render(
    <Provider store={store}>
      {/* Wrap component with Provider */}
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
});

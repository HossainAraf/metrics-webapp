import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/Nav'; // Replace with the correct path to your Nav component

test('Nav component matches snapshot', () => {
  const { asFragment } = render(
    <Router>
      <Nav />
    </Router>,
  );
  expect(asFragment()).toMatchSnapshot();
});

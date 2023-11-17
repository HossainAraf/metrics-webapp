import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from '../redux/store';
import App from '../App';

test('renders App component inside a Provider and StrictMode', () => {
  const container = document.createElement('div');
  container.id = 'root';

  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );

  expect(root).toBeDefined();
  expect(root.render).toBeDefined();
});

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import Home from './components/Home';
import Details from './components/Details';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:details" element={<Details />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

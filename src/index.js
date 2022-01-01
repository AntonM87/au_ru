import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import cities from './cities.json';

ReactDOM.render(
  <React.StrictMode>
    <App cities={cities} />
  </React.StrictMode>,
  document.getElementById('root')
);
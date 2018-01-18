import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  const a11y = require('react-a11y').default;
  a11y(React, ReactDOM, {
    rules: {
      'img-uses-alt': 'warn',
      'redundant-alt': ['warn', ['image', 'photo', 'foto', 'bild']],
    },
  });
}

ReactDOM.render(<App />, document.getElementById('root'));

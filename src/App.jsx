import './app.css';
import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => [
  <Header key={1}/>,
  <Home key={2}/>,
  <Footer key={3}/>
];

export default App;

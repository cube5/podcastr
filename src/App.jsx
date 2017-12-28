import './App.css';
import React, { Component } from 'react';
import logo from './logo.svg';

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
          <h2>Bienvenido a Podcastr!</h2>
        </div>
        <p className="intro">
          Para comenzar, inserta la url del podcast, por ejemplo:
          <a href="http://www.los40.com.mx/plantilla/xmlitunes.aspx?id=4444">
            http://www.los40.com.mx/plantilla/xmlitunes.aspx?id=4444
          </a>.
        </p>
        <Home />
      </div>
    );
  }
}

export default App;

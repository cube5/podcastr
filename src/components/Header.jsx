import React from 'react';
import logo from '../logo.svg';

const Header = () => (
  <section style={{ textAlign: 'center' }} className="hero is-primary is-bold">
    <div className="hero-body">
      <div className="container">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">
          Bienvenido a Podcastr!
        </h1>
        <h2 className="subtitle">
          Escucha tus podcasts favoritos
        </h2>
      </div>
    </div>
  </section>
);

export default Header;

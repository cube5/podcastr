import React from 'react';

const Footer = () => (
  <footer
    style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%';
    }}
    className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <a href="https://github.com/cube5/podcastr">
          <span className="icon is-large">
            <i className="fa fa-github fa-3x"></i>
          </span>
        </a>
        <p>Hecho con <a href="https://reactjs.org/">React</a> y <a href="https://bulma.io/">Bulma</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;

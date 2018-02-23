import React from 'react'

const Nav = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </a>

      <button class="button navbar-burger">
        <span>Home</span>
        <span>ITunes Top 10</span>
        <span />
      </button>
    </div>
  </nav>
)

export default Nav

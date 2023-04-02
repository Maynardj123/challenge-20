import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <a href="/">
      <h1>Jacob Maynard</h1>
      </a>
    </header>
  );
}

export default Header;


// maybe when they start to scroll or change page, adjust the header to be smaller to take up less room 
import React from 'react';
import "../styles/Navbar.css";


// const styles = {
//   // card: {
//   //   // margin: 20,
//   //   background: '#e8eaf6',
//   // },
//   // heading: {
//   //   background: '#9a74db',
//   //   minHeight: 50,
//   //   lineHeight: 3.5,
//   //   fontSize: '1.2rem',
//   //   color: 'white',
//   //   padding: '0 20px',
//   // },
// };


function Navbar() {
  return (
    <nav className="nav">
    <ul>
      <li>
        <a href="/about">About me</a>
      </li>
      <li>
        <a href="/portfolio">Portfolio</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/resume">Resume</a>
      </li>
      
    </ul>
    </nav>
    // <div style={styles.card}>
    //   <div style={styles.heading}>About me</div>
    // </div>,
    // <div style={styles.card}>
    //  <div style={styles.heading}>Portfolio</div>
    // </div>,
    // <div style={styles.card}>
    //   <div style={styles.heading}>Contact</div>
    // </div>,
    // <div style={styles.card}>
    //   <div style={styles.heading}>Resume</div>
    // </div>
  );
}

export default Navbar;

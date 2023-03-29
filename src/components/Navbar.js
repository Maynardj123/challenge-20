import React from 'react';


const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};


function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About me</div>
    </div>,
    <div style={styles.card}>
     <div style={styles.heading}>Portfolio</div>
    </div>,
    <div style={styles.card}>
      <div style={styles.heading}>Contact</div>
    </div>,
    <div style={styles.card}>
      <div style={styles.heading}>Resume</div>
    </div>
  );
}

export default Navbar;

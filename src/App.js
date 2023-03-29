import React from 'react';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
// import Project from './components/Project';
// import Card from './components/Card';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      <Footer />
      {/* <Project /> */}
    </div>
  );
}

export default App;

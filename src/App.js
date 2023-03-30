import React from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import Header from './components/Header';
import Footer from './components/Footer';

// import Project from './components/Project';
// import Card from './components/Card';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  let navs 
  switch (window.location.pathname) {
    case "/":
      navs = <App />
      break
    case "/about":
      navs = <About />
      break
    case  "/portfolio":
      navs = <Portfolio />
      break
    case "/Contact":
      navs = <Contact />
      break
    case "/resume":
      navs = <Resume />
      break
  }
  return (
    <div>
      <Header />
      <Navbar />
      {navs}
      {/* <Contact /> */}
      <Footer />
      {/* <Project /> */}
    </div>
  );
}

export default App;

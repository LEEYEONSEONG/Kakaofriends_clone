import React from 'react';
import Nav from '../../Components/Nav/Nav.js';
import Footer from '../../Components/Footer/Footer.js';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <main className="Main">
        <Nav />
        <Footer />
      </main>
    );
  }
}

export default Main;

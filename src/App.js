import React, { Component } from 'react';
import Header from './components/layout/header/Header';
import { Home } from './components/layout/landingPage/Home';
import { Footer } from './components/layout/footer/Footer';

class App extends Component {
  state = {
    lang: null,
  };
  render() {
    return (
      <div dir="rtl">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

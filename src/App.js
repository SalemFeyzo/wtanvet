import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/header/Header';
import { Footer } from './components/layout/footer/Footer';
import Routes from './Routes';

class App extends Component {
  state = {
    lang: null,
  };
  render() {
    return (
      <BrowserRouter>
        <div dir="rtl">
          <Header />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

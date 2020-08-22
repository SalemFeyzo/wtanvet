import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/header/Header';
import { Footer } from './components/layout/footer/Footer';
import Routes from './Routes';

class App extends Component {
  state = {
    lang: null,
  };
  render() {
    return (
      <Router>
        <div dir="rtl">
          <Header />
          <div className="body">
            <Routes />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/layout/header/Header';
import { Home } from './components/layout/landingPage/Home';

class App extends Component {
  state = {
    lang: null,
  };
  render() {
    return (
      <div dir="rtl">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;

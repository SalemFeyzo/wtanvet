import React, { Component } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
      <>
        <LanguageSwitcher />
        <Navigation />
      </>
    );
  }
}

export default Header;

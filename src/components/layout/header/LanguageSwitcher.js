import React, { Component } from 'react';
import arabic from '../../../assets/flags/arabic.png';
import turkish from '../../../assets/flags/turkish.png';
import english from '../../../assets/flags/english.png';

export default class LanguageSwitcher extends Component {
  render() {
    return (
      <div className="languageSwitch " dir="ltr">
        <button className="lang-btn">
          <img src={arabic} alt="عربي" />
        </button>
        <button className="lang-btn">
          <img src={turkish} alt="Türkçe" />
        </button>
      </div>
    );
  }
}

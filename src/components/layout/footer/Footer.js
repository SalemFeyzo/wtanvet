import React from 'react';
import { FooterBottom } from './FooterBottom';
import Map from './Map';
import ContactInfo from './ContactInfo';
import SocialInfo from './SocialInfo';

export const Footer = () => {
  return (
    <div>
      <div className="footer-top">
        <Map />
        <ContactInfo />
        <SocialInfo />
      </div>
      <FooterBottom />
    </div>
  );
};

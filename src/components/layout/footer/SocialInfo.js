import React from 'react';
import facebook from '../../../assets/social/facebook.svg';
import twitter from '../../../assets/social/twitter.svg';
import instagram from '../../../assets/social/instagram.svg';

const SocialInfo = () => {
  return (
    <div>
      <h5>مواقع التواصل الاجتماعي:</h5>
      <div className="social-info">
        <a
          href="https://twitter.com/salem_feyzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" height="50" width="50" />
        </a>
        <a
          href="https://twitter.com/salem_feyzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" height="50" width="50" />
        </a>
        <a
          href="https://twitter.com/salem_feyzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" height="50" width="50" />
        </a>
      </div>
    </div>
  );
};
export default SocialInfo;

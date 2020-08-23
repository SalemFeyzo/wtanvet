import React from 'react';
import facebook from '../../../assets/social/facebook.svg';
import twitter from '../../../assets/social/twitter.svg';
import instagram from '../../../assets/social/instagram.svg';

const SocialInfo = () => {
  return (
    <div>
      <div className="social-info">
        <a
          href="https://twitter.com/salem_feyzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" height="30" width="30" />
        </a>
        <a
          href="https://twitter.com/salem_feyzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" height="30" width="30" />
        </a>
        <a
          href="https://twitter.com/salem_feyzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" height="30" width="30" />
        </a>
      </div>
    </div>
  );
};
export default SocialInfo;

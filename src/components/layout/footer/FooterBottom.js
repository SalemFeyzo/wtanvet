import React from 'react';
import moment from 'moment';
import SocialInfo from './SocialInfo';

const date = new Date();
const year = moment(date).year();

export const FooterBottom = () => {
  return (
    <div dir="ltr" className="text-center bg-dark footer-bottom">
      <div>
        <p>Copyrights &#169; {year + ' WatanVet,  Inc.'}</p>
      </div>
      <div>
        <SocialInfo />
      </div>
      <div className="text-muted">
        <p>
          Made with <span>&hearts;</span> by{' '}
          <a
            href="https://twitter.com/salem_feyzo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Salem Feyzo
          </a>
        </p>
      </div>
    </div>
  );
};

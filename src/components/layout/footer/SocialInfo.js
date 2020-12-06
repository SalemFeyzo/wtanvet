import React from 'react'
import facebook from '../../../assets/social/facebook.svg'
import twitter from '../../../assets/social/twitter.svg'
import instagram from '../../../assets/social/instagram.svg'

const SocialInfo = () => {
  return (
    <>
      <div className='social-info'>
        <div className='socila-info-item'>
          <a
            href='https://twitter.com/salem_feyzo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={facebook} alt='facebook' height='30' width='30' />
          </a>
        </div>
        <div className='socila-info-item'>
          <a
            href='https://twitter.com/salem_feyzo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={twitter} alt='twitter' height='30' width='30' />
          </a>
        </div>
        <div className='socila-info-item'>
          <a
            href='https://twitter.com/salem_feyzo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagram} alt='instagram' height='30' width='30' />
          </a>
        </div>
      </div>
    </>
  )
}
export default SocialInfo

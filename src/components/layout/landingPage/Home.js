import React from 'react'
import { Link } from 'react-router-dom'
import LandingJumb from './LandingJumb'
import { Services } from './Services'
import { Container, Row } from 'reactstrap'
import FeaturedProducts from './FeaturedProducts'
import ProductSlider from './ProductSlider'
import useSound from 'use-sound'
import SoundMp3 from '../../../assets/SoundMp3.mp3'

export const Home = () => {
  const [play] = useSound(SoundMp3)
  return (
    <>
      <LandingJumb />

      <Container>
        <Row>
          <Services />
        </Row>
      </Container>

      <ProductSlider />

      <FeaturedProducts />
      <Container className='mt-4 mb-4 '>
        <div className='show-all-pruducts'>
          <Link to='/products'>
            <button onClick={play}>جميع المنتجات</button>
          </Link>
        </div>
      </Container>
    </>
  )
}

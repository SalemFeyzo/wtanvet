import React from 'react';
import LandingJumb from './LandingJumb';
import { Services } from './Services';
import { Container, Row } from 'reactstrap';
import FeaturedProducts from './FeaturedProducts';

export const Home = () => {
  return (
    <>
      <LandingJumb />
      <Container>
        <Row>
          <Services />
          <Services />
          <Services />
        </Row>
      </Container>

      <FeaturedProducts />
    </>
  );
};

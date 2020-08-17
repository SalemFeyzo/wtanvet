import React from 'react';
import { Container, Row } from 'reactstrap';
import ProductCard from '../../products/ProductCard';

const FeaturedProducts = () => {
  return (
    <div className="bg-light featured-products">
      <h3>منتجات مميزة</h3>
      <Container>
        <Row>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;

import React from 'react';
import { Container, Row } from 'reactstrap';
import ProductCard from '../../products/ProductCard';
import { products } from '../../../store/data/products';

const FeaturedProducts = () => {
  return (
    <div className="bg-light featured-products">
      <h3>منتجات مميزة</h3>
      <Container>
        <Row>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;

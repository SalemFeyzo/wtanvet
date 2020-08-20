import React from 'react';
import { Container, Row } from 'reactstrap';
import ProductCard from '../../products/ProductCard';
import { connect } from 'react-redux';

const FeaturedProducts = ({ products }) => {
  return (
    <div className="bg-light featured-products">
      <h3>منتجات مميزة</h3>
      <Container>
        <Row>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  const products = state.products;
  return {
    products,
  };
};

export default connect(mapStateToProps)(FeaturedProducts);

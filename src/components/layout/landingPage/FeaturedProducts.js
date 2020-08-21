import React from 'react';
import { Container, Row } from 'reactstrap';
import ProductCard from '../../products/ProductCard';
import { connect } from 'react-redux';

const FeaturedProducts = ({ feturedProducts }) => {
  return (
    <div className="bg-light featured-products">
      <h3>منتجات مميزة</h3>
      <Container>
        <Row>
          {feturedProducts &&
            feturedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  const feturedProducts = state.feturedProducts;
  return {
    feturedProducts,
  };
};

export default connect(mapStateToProps)(FeaturedProducts);

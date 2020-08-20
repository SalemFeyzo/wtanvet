import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';
import ProductSearchBox from './ProductSearchBox';
import { ProductsCategoryAccordion } from './ProductsCategoryAccordion';
import { connect } from 'react-redux';

const Products = ({ products }) => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={3} className="mb-3 mt-3">
          <ProductSearchBox />
          <ProductsCategoryAccordion />
        </Col>
        <Col>
          <Row>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const products = state.products;
  return {
    products,
  };
};

export default connect(mapStateToProps)(Products);

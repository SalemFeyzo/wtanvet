import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';
import ProductSearchBox from './ProductSearchBox';
import { ProductsCategoryAccordion } from './ProductsCategoryAccordion';

const Products = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={3} className="mb-3 mt-3">
          <ProductSearchBox />
          <ProductsCategoryAccordion />
        </Col>
        <Col>
          <Row>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Products;

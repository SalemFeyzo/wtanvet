import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';
import ProductSearchBox from './ProductSearchBox';
import { ProductsCategoryAccordion } from './ProductsCategoryAccordion';
import { products } from '../../store/data/products';

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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Products;

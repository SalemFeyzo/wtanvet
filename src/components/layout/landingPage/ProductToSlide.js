import React from 'react';
import { Card, CardImg, Col } from 'reactstrap';

const ProductToSlide = (props) => {
  const { name, pic, id } = props.product;
  return (
    <Col>
      <Card>
        <CardImg
          src={require('../../../assets/productsPics/' + pic + '.jpg')}
        />
      </Card>
    </Col>
  );
};

export default ProductToSlide;

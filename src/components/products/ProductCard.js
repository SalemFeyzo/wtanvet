import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

const ProductCard = (props) => {
  const { name } = props.product;
  return (
    <>
      <Col sm="12" md="6" lg="4" className="mb-3 mt-3">
        <Card>
          <CardImg
            top
            width="100%"
            src="https://reactstrap.github.io/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <Button color="primary">التفاصيل</Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default ProductCard;

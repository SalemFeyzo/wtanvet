import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

const ProductCard = () => {
  return (
    <>
      <Col sm="12" md="6" lg="3" className="mb-3">
        <Card>
          <CardImg
            top
            width="100%"
            src="https://reactstrap.github.io/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>وطن - فيتال</CardTitle>
            <Button color="primary">التفاصيل</Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default ProductCard;

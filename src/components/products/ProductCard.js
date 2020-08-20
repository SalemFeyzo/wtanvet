import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

const ProductCard = (props) => {
  const { name, pic, id } = props.product;
  let path = '/product/' + name + '/' + id;
  path = path.split(' ').join('_');
  return (
    <>
      <Col sm="12" md="6" lg="4" className="mb-3 mt-3">
        <Card>
          <CardImg
            top
            width="100%"
            src={require('../../assets/productsPics/' + pic + '.jpg')}
            alt={name}
          />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <Link to={path}>
              <Button color="primary">التفاصيل</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default ProductCard;

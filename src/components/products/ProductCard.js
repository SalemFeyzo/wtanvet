import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import useSound from 'use-sound';
import SoundMp3 from '../../assets/SoundMp3.mp3';

const ProductCard = (props) => {
  const { name, pic, id } = props.product;
  const [play] = useSound(SoundMp3);
  let path = '/product/' + name + '/' + id;
  path = path.split(' ').join('_');
  return (
    <>
      <Col sm="12" md="6" lg="4" className="mb-3 mt-3">
        <Card className="shadowBlue ">
          <CardImg
            top
            width="100%"
            src={require('../../assets/productsPics/' + pic + '.jpg')}
            alt={name}
          />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <Link to={path}>
              <button onClick={play}>التفاصيل</button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default ProductCard;

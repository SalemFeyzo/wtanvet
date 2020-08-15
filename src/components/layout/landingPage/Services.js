import React from 'react';
import service1 from '../../../assets/services/service1.svg';
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

export const Services = () => {
  return (
    <>
      <Col lg={4}>
        <Card>
          <CardImg top width="100%" src={service1} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

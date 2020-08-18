import React from 'react';
import ContactForm from './ContactForm';
import { Container, Row, Col } from 'reactstrap';

export const Contact = () => {
  return (
    <Container className="bg-light mt-3" fluid>
      <Row>
        <Col sm={12} md={12} lg={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

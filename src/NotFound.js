import React from 'react';
import { Container, CardBody } from 'reactstrap';
import { Card } from '@material-ui/core';

const NotFound = () => {
  return (
    <>
      <Container>
        <Card
          style={{
            height: '50vh',
            width: '100%',
            margin: '10px',
          }}
        >
          <CardBody>
            <p>الصفحة المطلوبة غير موجودة</p>
            <h1>404</h1>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
export default NotFound;

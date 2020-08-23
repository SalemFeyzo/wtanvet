import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ContactForm from './ContactForm';
import { Container, Row, Col, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import useSound from 'use-sound';
import SoundMp3 from '../../../assets/SoundMp3.mp3';

export const Contact = () => {
  const [play] = useSound(SoundMp3);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>وطن فيت | اتصل بنا</title>
        <meta name="description" content="وطن فيت للادوية البيطرية" />
        <link rel="canonical" href="https://watanvet.com/contact" />
      </Helmet>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/" onClick={play}>
            الرئيسية
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>اتصل بنا</BreadcrumbItem>
      </Breadcrumb>
      <Container className="bg-light mt-3" fluid>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

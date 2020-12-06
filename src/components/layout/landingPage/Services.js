import React from 'react'
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import LazyLoad from 'react-lazyload'
import LoadSpinner from '../../../UI/LoadSpinner'

export const Services = () => {
  return (
    <>
      <Col lg={4} className='mb-3'>
        <Card>
          <LazyLoad
            height={100}
            offset={[-100, 100]}
            placeholder={<LoadSpinner />}
          >
            <CardImg
              width='100%'
              height='200px'
              src='/images/services/service1.jpg'
              alt='...'
            />
          </LazyLoad>
          <CardBody>
            <CardTitle>ضمان الجودة</CardTitle>
            <CardText>
              تسعى شركة وطن فيت لتوفير منتجات ذات جودة عالية تتطابق مع المعايير
              العالمية
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col lg={4} className='mb-3'>
        <Card>
          <LazyLoad
            height={100}
            offset={[-100, 100]}
            placeholder={<LoadSpinner />}
          >
            <CardImg
              width='100%'
              height='200px'
              src='/images/services/service2.jpg'
              alt='...'
            />
          </LazyLoad>

          <CardBody>
            <CardTitle>الشحن</CardTitle>
            <CardText>
              توفر شركة وطن للأدوية البيطرية خدمات شحن داخلية وخارجية
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col lg={4} className='mb-3'>
        <Card>
          <LazyLoad
            height={100}
            offset={[-100, 100]}
            placeholder={<LoadSpinner />}
          >
            <CardImg
              width='100%'
              height='200px'
              src='/images/services/service3.jpg'
              alt='...'
            />
          </LazyLoad>
          <CardBody>
            <CardTitle>البحث والتطوير</CardTitle>
            <CardText>
              تسعى شركة وطن للأدوية البيطرية لتطوير منتجاتها من اجل ضمان الجودة
              والفعالية
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

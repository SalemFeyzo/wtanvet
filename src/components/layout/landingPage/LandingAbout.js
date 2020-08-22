import React from 'react';
import {
  Container,
  Row,
  Col,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';
import about from '../../../assets/about.jpg';
import { Card } from '@material-ui/core';

const LandingAbout = () => {
  return (
    <>
      <Container className="bg-light landing-category">
        <Row>
          <Col sm={12} md={6} lg={6} className="mb-3">
            <Card>
              <CardImg top width="100%" src={about} alt="watan-vet" />
            </Card>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Card>
              <CardBody>
                <CardTitle>
                  <h3 className="text-primary">
                    وطن فيت للأدوية البيطرية
                  </h3>
                </CardTitle>
                <CardText>
                  تعتبر شركة وطن لصناعة الأدوية البيطرية (وطن فيت), من الشركات
                  الرائدة في صناعة الأدوية البيطرية في سوريا و لبنان و العراق و
                  الأردن و السعودية, فقد تأسست في عام 1993 بتقنيّة و مواصفات
                  عالية و بهدف ضمان الفاعالية الممتازة في علاج مختلف الأمراض.
                  وقد حازت الشركة المتحدة لصناعة الأدوية البيطرية (يونيفت) على
                  ثقة المستهلك النهائي وذلك لما تتمتع به أدويتها من جودة في
                  التصنيع و فعالية عالية وأمانة في نقل المعلومات العلميّة و
                  نقاوة و أمانة المواد الفعالة.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default LandingAbout;

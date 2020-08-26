import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import useSound from 'use-sound';
import SoundMp3 from '../../assets/SoundMp3.mp3';

const Product = (props) => {
  const productDetails = props.product[0];
  const [play] = useSound(SoundMp3);
  const {
    id,
    name,
    pic,
    content,
    indications,
    poultry,
    usage,
    warning,
    period,
    packageType,
    preservation,
  } = productDetails;
  let path = '/product/' + name + '/' + id;
  path = path.split(' ').join('_');
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>وطن فيت | {name}</title>
        <meta name="description" content={indications} />
        <link rel="canonical" href={`https://watanvet.netlify.app/${path}`} />
      </Helmet>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/" onClick={play}>
            الرئيسية
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/products" onClick={play}>
            جميع المنتجات
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{name}</BreadcrumbItem>
      </Breadcrumb>
      <Container fluid>
        <Row>
          <Col className="mt-3 text-center">
            <h2>{name}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className=" mt-5">
            <Card>
              <CardImg
                top
                width="100%"
                src={require('../../assets/productsPics/' + pic + '.jpg')}
                alt={name}
              />
            </Card>
          </Col>
          <Col lg={8} className="mb-3 mt-3">
            <ListGroup>
              <ListGroupItemHeading>تفاصيل المنتج:</ListGroupItemHeading>
              <ListGroupItem action>
                <span className="text-primary">المحتويات: </span>
                {content}
              </ListGroupItem>
              <ListGroupItem action>
                <span className="text-primary">الاستطبابات: </span>
                {indications}
              </ListGroupItem>
              <ListGroupItem action>
                <span className="text-primary">الدواجن: </span> {poultry}
              </ListGroupItem>
              <ListGroupItem action>
                <span className="text-primary">الاستعمال: </span>
                {usage.howToUse}
                <ListGroupItemHeading>الجرعات: </ListGroupItemHeading>
                <ListGroupItem action>الأبقار: {usage.cows}</ListGroupItem>
                <ListGroupItem action>الجمال: {usage.camels}</ListGroupItem>
                <ListGroupItem action>الأغنام: {usage.sheeps}</ListGroupItem>
                <ListGroupItem action>الماعز: {usage.goats}</ListGroupItem>
              </ListGroupItem>
              <ListGroupItem action>
                <span className="text-danger">تنبيه: </span>
                <span className="text-warning">{warning}</span>
              </ListGroupItem>
              <ListGroupItem action>
                <span className="text-primary">فترة السحب: </span>
                {period}
              </ListGroupItem>
              <ListGroupItem action>
                <span className="text-primary"> التغليف: </span>
                {packageType}
              </ListGroupItem>
              <ListGroupItem action>
                <span className="text-primary">الحفظ والصلاحية: </span>
                {preservation}
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  const product = state.products.filter((product) => product.id === id);
  // console.log(id);
  // console.log(state.products);
  // console.log(product);
  return {
    product,
  };
};
export default connect(mapStateToProps)(Product);

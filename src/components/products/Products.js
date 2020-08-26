import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import ProductCard from './ProductCard';
import ProductSearchBox from './ProductSearchBox';
import { ProductsCategoryAccordion } from './ProductsCategoryAccordion';
import { connect } from 'react-redux';
import SoundMp3 from '../../assets/SoundMp3.mp3';

class Products extends Component {
  state = {
    search: null,
  };

  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const clickSound = new Audio(SoundMp3);
    const { products } = this.props;
    const { search } = this.state;
    const filterSearch = products.filter((product) => {
      return product.name.indexOf(search) !== -1;
    });
    search && console.log(filterSearch);
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>وطن فيت | جميع المنتجات</title>
          <meta
            name="description"
            content=" وطن للأدوية البيطرية (وطن فيت), من الشركات الرائدة في مجال الأدوية البيطرية في سوريا. تطبق الشركة تقنيات حديثة بهدف ضمان الفاعالية الممتازة في علاج مختلف الأمراض."
          />
          <link rel="canonical" href="https://watanvet.netlify.app/products" />
        </Helmet>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/" onClick={() => clickSound.play()}>
              الرئيسية
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>جميع المنتجات</BreadcrumbItem>
        </Breadcrumb>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={3} className="mb-3 mt-3">
              <ProductSearchBox setSearch={this.handleSearchChange} />
              <ProductsCategoryAccordion />
            </Col>

            <Col>
              <Row>
                {products &&
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const products = state.products;
  return {
    products,
  };
};

export default connect(mapStateToProps)(Products);

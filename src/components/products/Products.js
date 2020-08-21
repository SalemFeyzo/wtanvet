import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';
import ProductSearchBox from './ProductSearchBox';
import { ProductsCategoryAccordion } from './ProductsCategoryAccordion';
import { connect } from 'react-redux';

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
    const { products } = this.props;
    const { search } = this.state;
    const filterSearch = products.filter((product) => {
      return product.name.indexOf(search) !== -1;
    });
    search && console.log(filterSearch);
    return (
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

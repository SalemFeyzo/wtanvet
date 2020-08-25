import React, { Component } from 'react';
import {
  FormGroup,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import HeaderSearchResults from './HeaderSearchResults';
import { connect } from 'react-redux';

class SearchBox extends Component {
  state = {
    search: null,
  };
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.search);
  };

  render() {
    const { className, isOpen, toggleSearch } = this.props;

    const filterSearch = this.props.products.filter((product) => {
      return product.name.indexOf(this.state.search) !== -1;
    });
    return (
      <>
        <Modal
          isOpen={isOpen}
          toggle={toggleSearch}
          className={className}
          dir="rtl"
        >
          <ModalHeader toggle={toggleSearch}>ابحث عن منتج</ModalHeader>
          <ModalBody>
            <Form className="mt-3 ">
              <FormGroup>
                <Input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="ادخل اسم المنتج"
                  onChange={this.handleOnChange}
                />
              </FormGroup>
            </Form>
            {this.state.search && <p>{filterSearch.length}نتائج / نتيجة</p>}
            {this.state.search &&
              filterSearch.map((product) => (
                <HeaderSearchResults
                  key={product.id}
                  product={product}
                  toggle={toggleSearch}
                />
              ))}
          </ModalBody>
        </Modal>
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

export default connect(mapStateToProps)(SearchBox);

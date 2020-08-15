import React, { Component } from 'react';
import {
  FormGroup,
  Form,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

export default class SearchBox extends Component {
  render() {
    const { className, isOpen, toggleSearch } = this.props;

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
                  placeholder="ابحث عن منتج"
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>نتائج البحث</ModalFooter>
        </Modal>
      </>
    );
  }
}

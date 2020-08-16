import React, { Component } from 'react';
import { Form, FormGroup, Input, Card, CardBody, CardTitle } from 'reactstrap';

class ProductSearchBox extends Component {
  render() {
    return (
      <>
        <Card>
          <CardBody>
            <CardTitle style={{ cursor: 'pointer' }}>ابحث عن منتج</CardTitle>
            <Form className="mt-3 ">
              <FormGroup>
                <Input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="ادخل اسم المنتج"
                />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </>
    );
  }
}
export default ProductSearchBox;

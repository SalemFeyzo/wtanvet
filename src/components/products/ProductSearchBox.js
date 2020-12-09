import React from 'react'
import { Form, FormGroup, Input, Card, CardBody, CardTitle } from 'reactstrap'

const ProductSearchBox = ({ setSearch }) => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle style={{ cursor: 'pointer' }}>ابحث عن منتج</CardTitle>
          <Form className='mt-3 '>
            <FormGroup>
              <Input
                type='text'
                name='search'
                id='search'
                placeholder='ادخل اسم المنتج'
                onChange={(e) => setSearch(e.target.value)}
              />
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </>
  )
}

export default ProductSearchBox

import React from 'react'
import { Container, Row } from 'reactstrap'
import ProductCard from '../../products/ProductCard'
import { connect } from 'react-redux'

const FeaturedProducts = ({ products }) => {
  const feturedProducts = products.filter((product) => product.featured === 1)
  return (
    <div className='bg-light featured-products'>
      <h3>منتجات مميزة</h3>
      <Container>
        <Row>
          {feturedProducts &&
            feturedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  const products = state.products
  return {
    products,
  }
}

export default connect(mapStateToProps)(FeaturedProducts)

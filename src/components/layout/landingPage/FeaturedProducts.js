import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import ProductCard from '../../products/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { listFeaturedProducts } from '../../../store/actions/productsActions'
import LoadSpinner from '../../../UI/LoadSpinner'

const FeaturedProducts = () => {
  const dispatch = useDispatch()
  const featuredProducts = useSelector((state) => state.featuredProducts)
  const { loading, error, products } = featuredProducts
  useEffect(() => {
    dispatch(listFeaturedProducts())
    return () => {
      //
    }
  }, [dispatch])
  return (
    <div className=' featured-products '>
      <h3>منتجات مميزة</h3>
      <Container>
        {loading ? (
          <LoadSpinner />
        ) : error ? (
          <p>{error}</p>
        ) : products ? (
          <Row>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Row>
        ) : (
          ''
        )}
      </Container>
    </div>
  )
}

export default FeaturedProducts

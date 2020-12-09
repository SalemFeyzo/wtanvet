import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap'
import ProductCard from '../../products/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../../store/actions/productsActions'
import LoadSpinner from '../../../UI/LoadSpinner'

const FeaturedProducts = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  const feturedProducts = products.filter((product) => product.featured === 1)
  useEffect(() => {
    dispatch(listProducts())
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
        ) : (
          <Row>
            {feturedProducts &&
              feturedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Row>
        )}
      </Container>
    </div>
  )
}

export default FeaturedProducts

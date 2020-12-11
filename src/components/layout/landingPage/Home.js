import React, { Suspense } from 'react'
import LoadSpinner from '../../../UI/LoadSpinner'

const Carousel = React.lazy(() => import('./Carousel'))
const ProductSlider = React.lazy(() => import('./ProductSlider'))
const FeaturedProducts = React.lazy(() => import('./FeaturedProducts'))
export const Home = () => {
  return (
    <>
      <Suspense fallback={<LoadSpinner />}>
        <Carousel />

        <ProductSlider />
        <FeaturedProducts />
      </Suspense>
    </>
  )
}

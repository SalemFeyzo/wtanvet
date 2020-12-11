import React, { useEffect, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'reactstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp'
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp'
import { listProductInSlide } from '../../../store/actions/productsActions'
import LoadSpinner from '../../../UI/LoadSpinner'

const ProductToSlide = React.lazy(() => import('./ProductToSlide'))
function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <ArrowBackIosSharpIcon
      className={className}
      style={{
        ...style,
        display: 'block',
        color: '#f7941d',
      }}
      onClick={onClick}
    />
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <ArrowForwardIosSharpIcon
      className={className}
      style={{
        ...style,
        display: 'block',
        color: '#f7941d',
      }}
      onClick={onClick}
    />
  )
}

const ProductSlider = () => {
  const dispatch = useDispatch()
  const productInSlide = useSelector((state) => state.productInSlide)
  const { loading, error, products } = productInSlide
  useEffect(() => {
    dispatch(listProductInSlide())
    return () => {
      //
    }
  }, [dispatch])

  const settings = {
    lazyLoad: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }
  return (
    <>
      <Container className='mt-4 mb-4'>
        {loading ? (
          <LoadSpinner />
        ) : error ? (
          <p>{error}</p>
        ) : products ? (
          <Slider {...settings}>
            {products.map((product) => (
              <Suspense fallback={<LoadSpinner />}>
                <ProductToSlide key={product.id} product={product} />
              </Suspense>
            ))}
          </Slider>
        ) : (
          ''
        )}
      </Container>
    </>
  )
}

export default ProductSlider

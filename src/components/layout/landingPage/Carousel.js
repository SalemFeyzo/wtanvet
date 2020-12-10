import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LoadSpinner from '../../../UI/LoadSpinner'
import { listCarouselPics } from '../../../store/actions/carouselActions'
const Carousel = () => {
  const dispatch = useDispatch()
  const carouselPicsList = useSelector((state) => state.carouselPicsList)
  const { loading, error, carouselPics } = carouselPicsList

  useEffect(() => {
    dispatch(listCarouselPics())
    return () => {
      //
    }
  }, [dispatch])
  const settings = {
    lazyLoad: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <div className='carousel'>
      <Row>
        <Col>
          {loading ? (
            <LoadSpinner />
          ) : error ? (
            <p>{error}</p>
          ) : carouselPics ? (
            <Slider {...settings} className='shadowBlue'>
              {carouselPics.map((carouselPic) => (
                <img
                  key={carouselPic.id}
                  src={carouselPic.pic}
                  alt={carouselPic.id}
                />
              ))}
            </Slider>
          ) : (
            ''
          )}
        </Col>
        <Col sm={12} md={6} lg={6} className='carousel-text'>
          <h1>وطن للأدوية البيطرية</h1>
          <p className='lead'>
            تعتبر شركة وطن للأدوية البيطرية (وطن فيت), من الشركات الرائدة في
            مجال الأدوية البيطرية في سوريا. تطبق الشركة تقنيات حديثة بهدف ضمان
            الفاعالية الممتازة في علاج مختلف الأمراض.
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default Carousel

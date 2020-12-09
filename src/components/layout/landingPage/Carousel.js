import React from 'react'
import { Row, Col } from 'reactstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useSelector } from 'react-redux'

const Carousel = () => {
  const carouselPics = useSelector((state) => state.carouselPics)
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
          <Slider {...settings} className='shadowBlue'>
            {carouselPics.map((carouselPic) => (
              <img
                key={carouselPic.id}
                src={carouselPic.pic}
                alt={carouselPic.id}
              />
            ))}
          </Slider>
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

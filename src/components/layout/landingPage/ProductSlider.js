import React from 'react';
import ProductToSlide from './ProductToSlide';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';

function NextArrow(props) {
  const { className, style, onClick } = props;
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
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
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
  );
}

const ProductSlider = ({ products }) => {
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
  };
  return (
    <>
      <Container>
        <Slider {...settings}>
          {products.map((product) => (
            <ProductToSlide key={product.id} product={product} />
          ))}
        </Slider>
      </Container>
    </>
  );
};

const mapstateToProps = (state) => {
  const products = state.products;
  return {
    products,
  };
};

export default connect(mapstateToProps)(ProductSlider);

import React from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import LoadSpinner from '../../UI/LoadSpinner'
import { Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap'
import useSound from 'use-sound'
import SoundMp3 from '../../assets/SoundMp3.mp3'
import ImageNotFound from '../../assets/imageNotFound.png'

const ProductCard = (props) => {
  const { name, pic, id } = props.product
  const [play] = useSound(SoundMp3)
  let path = '/product/' + name + '/' + id
  path = path.split(' ').join('_')
  path = path.split('%').join('_')
  return (
    <>
      <Col sm='12' md='6' lg='4' className='mb-3 mt-3'>
        <Link to={path} onClick={play}>
          <LazyLoad
            height={100}
            offset={[-100, 100]}
            placeholder={<LoadSpinner />}
          >
            <Card className='shadowBlue '>
              <LazyLoad once={true} placeholder={<LoadSpinner />}>
                <CardImg
                  top
                  width='100%'
                  src={pic ? pic : ImageNotFound}
                  alt={name}
                />
              </LazyLoad>

              <CardBody>
                <CardTitle>{name}</CardTitle>
                <Link to={path}>
                  <button onClick={play}>التفاصيل</button>
                </Link>
              </CardBody>
            </Card>
          </LazyLoad>
        </Link>
      </Col>
    </>
  )
}
export default ProductCard

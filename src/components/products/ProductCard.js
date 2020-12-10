import React from 'react'
import { Link } from 'react-router-dom'
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
          <Card className='shadowBlue '>
            <CardImg
              top
              width='100%'
              src={pic ? pic : ImageNotFound}
              alt={name}
            />

            <CardBody>
              <CardTitle>{name}</CardTitle>
              <Link to={path}>
                <button onClick={play}>التفاصيل</button>
              </Link>
            </CardBody>
          </Card>
        </Link>
      </Col>
    </>
  )
}
export default ProductCard

import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, Col, CardBody, CardTitle } from 'reactstrap'
import useSound from 'use-sound'
import SoundMp3 from '../../../assets/SoundMp3.mp3'

const ProductToSlide = (props) => {
  const { name, pic, id } = props.product
  const [play] = useSound(SoundMp3)
  let path = '/product/' + name + '/' + id
  path = path.split(' ').join('_')
  path = path.split('%').join('_')
  return (
    <Col>
      <Link to={path} onClick={play}>
        <Card>
          <CardImg src={pic} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <Link to={path}>
              <button onClick={play}>التفاصيل</button>
            </Link>
          </CardBody>
        </Card>
      </Link>
    </Col>
  )
}

export default ProductToSlide

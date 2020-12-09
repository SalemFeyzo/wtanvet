import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap'
import LoadingSpinner from '../../UI/LoadSpinner'
import useSound from 'use-sound'
import SoundMp3 from '../../assets/SoundMp3.mp3'
import ImageNotFound from '../../assets/imageNotFound.png'
import { listProductDetails } from '../../store/actions/productsActions'

const Product = (props) => {
  console.log(props)
  const [play] = useSound(SoundMp3)
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, product } = productDetails
  const id = props.match.params.id
  useEffect(() => {
    dispatch(listProductDetails(id))
    return () => {
      //
    }
  }, [dispatch, id])

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='/' onClick={play}>
            الرئيسية
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='/products' onClick={play}>
            جميع المنتجات
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{product.name}</BreadcrumbItem>
      </Breadcrumb>
      <Container fluid>
        {loading && <LoadingSpinner />}
        <Row>
          <Col className='mt-3 text-center'>
            <h2>{product.name}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className=' mt-5'>
            <Card className='mb-2'>
              <CardImg
                top
                width='100%'
                src={product.pic ? product.pic : ImageNotFound}
                alt={product.name}
              />
            </Card>
          </Col>
          <Col lg={8} className='mb-3 mt-3'>
            <ListGroup>
              {!product.content && !product.indications ? (
                <ListGroupItemHeading>ما من تفاصيل لعرضها</ListGroupItemHeading>
              ) : (
                <ListGroupItemHeading>...</ListGroupItemHeading>
              )}
              {product.content && (
                <ListGroupItem action>
                  <span className='text-primary'>المحتويات: </span>
                  {product.content}
                </ListGroupItem>
              )}
              {product.indications && (
                <ListGroupItem action>
                  <span className='text-primary'>الاستطبابات: </span>
                  {product.indications}
                </ListGroupItem>
              )}
              {product.usage && (
                <ListGroupItem action>
                  <span className='text-primary'>الاستعمال: </span>
                  {product.usage}
                </ListGroupItem>
              )}
              {product.warning && (
                <ListGroupItem action>
                  <span className='text-danger'>تنبيه: </span>
                  <span className='text-danger'>{product.warning}</span>
                </ListGroupItem>
              )}
              {product.period && (
                <ListGroupItem action>
                  <span className='text-primary'>فترة السحب: </span>
                  {product.period}
                </ListGroupItem>
              )}
              {product.packageType && (
                <ListGroupItem action>
                  <span className='text-primary'> التغليف: </span>
                  {product.packageType}
                </ListGroupItem>
              )}
              {product.preservation && (
                <ListGroupItem action>
                  <span className='text-primary'>الحفظ والصلاحية: </span>
                  {product.preservation}
                </ListGroupItem>
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Product

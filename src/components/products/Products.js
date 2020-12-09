import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import ProductCard from './ProductCard'
import ProductSearchBox from './ProductSearchBox'
import { ProductsCategoryAccordion } from './ProductsCategoryAccordion'
import { useDispatch, useSelector } from 'react-redux'
import useSound from 'use-sound'
import SoundMp3 from '../../assets/SoundMp3.mp3'
import { listProducts } from '../../store/actions/productsActions'

const Products = () => {
  const [search, setSearch] = useState(null)
  const [dosageForm, setDosageForm] = useState(null)
  const [play] = useSound(SoundMp3)
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  const filterSearch = products.filter(
    (product) => product.name.indexOf(search) !== -1
  )
  const filterByDosageForm = products.filter(
    (product) => product.dosageForm === dosageForm
  )
  useEffect(() => {
    dispatch(listProducts())
    return () => {
      //
    }
  }, [dispatch])
  console.log(products)
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>وطن فيت | جميع المنتجات</title>
        <meta
          name='description'
          content=' وطن للأدوية البيطرية (وطن فيت), من الشركات الرائدة في مجال الأدوية البيطرية في سوريا. تطبق الشركة تقنيات حديثة بهدف ضمان الفاعالية الممتازة في علاج مختلف الأمراض.'
        />
        <link rel='canonical' href='https://watanvet.netlify.app/products' />
      </Helmet>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to='/' onClick={play}>
            الرئيسية
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>جميع المنتجات</BreadcrumbItem>
      </Breadcrumb>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={3} className='mb-3 mt-3'>
            <ProductSearchBox setSearch={(e) => setSearch(e)} />
            <ProductsCategoryAccordion setFilter={(e) => setDosageForm(e)} />
          </Col>

          <Col>
            {search && <h6>نتائج البحث ل: {search}</h6>}
            {dosageForm && <h6>منتجات شكلها الصيدلاني: {dosageForm}</h6>}
            <Row>
              {search
                ? filterSearch.map((s) => (
                    <ProductCard key={s.id} product={s} />
                  ))
                : dosageForm
                ? filterByDosageForm.map((d) => (
                    <ProductCard key={d.id} product={d} />
                  ))
                : products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Products

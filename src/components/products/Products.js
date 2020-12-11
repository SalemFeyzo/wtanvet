import React, { useState, useEffect, Suspense } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import ProductSearchBox from './ProductSearchBox'
import { ProductsCategoryAccordion } from './ProductsCategoryAccordion'
import { useDispatch, useSelector } from 'react-redux'
import useSound from 'use-sound'
import SoundMp3 from '../../assets/SoundMp3.mp3'
import { listProducts } from '../../store/actions/productsActions'
import LoadSpinner from '../../UI/LoadSpinner'

const ProductCard = React.lazy(() => import('./ProductCard'))

const Products = () => {
  const [search, setSearch] = useState(null)
  const [dosageForm, setDosageForm] = useState(null)
  const [productsToLoad, setProductsToload] = useState([])
  const [num, setNum] = useState(12)
  const [play] = useSound(SoundMp3)
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  const productsSlice = products.slice(0, num)
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
  const loadProducts = () => {
    play()
    setProductsToload(productsSlice)
    setNum(num + 6)
  }
  const clearResults = () => {
    play()
    setSearch(null)
    setDosageForm(null)
  }
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
            {error && <p>{error}</p>}
            {search && (
              <h6 className='result-title'>
                نتائج البحث ل: {search}
                <span className='close-button' onClick={clearResults}>
                  X
                </span>
              </h6>
            )}
            {dosageForm && (
              <h6 className='result-title'>
                منتجات شكلها الصيدلاني: {dosageForm}
                <span className='close-button' onClick={clearResults}>
                  X
                </span>
              </h6>
            )}
            {loading && <LoadSpinner />}
            <Row>
              {search
                ? filterSearch.map((s) => (
                    <Suspense fallback={<LoadSpinner />}>
                      <ProductCard key={s.id} product={s} />
                    </Suspense>
                  ))
                : dosageForm
                ? filterByDosageForm.map((d) => (
                    <Suspense fallback={<LoadSpinner />}>
                      <ProductCard key={d.id} product={d} />
                    </Suspense>
                  ))
                : productsToLoad.length !== 0
                ? productsToLoad.map((product) => (
                    <Suspense fallback={<LoadSpinner />}>
                      <ProductCard key={product.id} product={product} />
                    </Suspense>
                  ))
                : products.slice(0, 6).map((product) => (
                    <Suspense fallback={<LoadSpinner />}>
                      <ProductCard key={product.id} product={product} />
                    </Suspense>
                  ))}
            </Row>
          </Col>
        </Row>
        <Container className='mt-4 mb-4 '>
          <div className='show-all-pruducts'>
            {!search &&
            !dosageForm &&
            productsToLoad &&
            products.length !== productsToLoad.length ? (
              <>
                <button onClick={loadProducts}>أظهر المزيد من المنتجات</button>
                <p>{`${
                  productsToLoad.length === 0 ? 6 : productsToLoad.length
                } ${num === 12 ? 'منتجات' : 'منتج'} من ${products.length}`}</p>
              </>
            ) : (
              <p>
                {!search &&
                  !dosageForm &&
                  `${products.length} منتج من ${products.length}`}
              </p>
            )}
          </div>
        </Container>
      </Container>
    </>
  )
}

export default Products

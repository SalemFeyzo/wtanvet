import React, { useState, useEffect } from 'react'
import {
  FormGroup,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap'
import HeaderSearchResults from './HeaderSearchResults'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../../store/actions/productsActions'
import LoadSpinner from '../../../UI/LoadSpinner'

const SearchBox = (props) => {
  const [search, setSearch] = useState(null)
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  const { className, isOpen, toggleSearch } = props

  const filterSearch = products.filter(
    (product) => product.name.indexOf(search) !== -1
  )
  useEffect(() => {
    dispatch(listProducts())
    return () => {
      //
    }
  }, [dispatch])
  return (
    <>
      <Modal
        isOpen={isOpen}
        toggle={toggleSearch}
        className={className}
        dir='rtl'
      >
        <ModalHeader toggle={toggleSearch}>ابحث عن منتج</ModalHeader>
        <ModalBody>
          <Form className='mt-3 '>
            <FormGroup>
              <Input
                type='text'
                name='search'
                id='search'
                placeholder='ادخل اسم المنتج'
                onChange={(e) => setSearch(e.target.value)}
              />
            </FormGroup>
          </Form>
          {loading && <LoadSpinner />}
          {error && <p>{error}</p>}
          {search && <p>{filterSearch.length} نتائج / نتيجة</p>}
          {search &&
            filterSearch.map((product) => (
              <HeaderSearchResults
                key={product.id}
                product={product}
                toggle={toggleSearch}
              />
            ))}
        </ModalBody>
      </Modal>
    </>
  )
}

export default SearchBox

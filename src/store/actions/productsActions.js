import { products } from '../data/products'
import {
  FEATURED_PRODUCTS_FAIL,
  FEATURED_PRODUCTS_REQUEST,
  FEATURED_PRODUCTS_SUCCESS,
  PRODUCTS_LIST_FAIL,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_INSLIDE_FAIL,
  PRODUCT_INSLIDE_REQUEST,
  PRODUCT_INSLIDE_SUCCESS,
} from '../constants/productsConstants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_LIST_REQUEST })
    const data = await products
    dispatch({ type: PRODUCTS_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload: 'لا يمكن تحميل المنتجات',
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const data = await products.find((product) => product.id === id)
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: 'لا يمكن تحميل المنتجات',
    })
  }
}

export const listProductInSlide = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_INSLIDE_REQUEST })
    const data = await products.filter((product) => product.inSlide === 1)
    dispatch({ type: PRODUCT_INSLIDE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: PRODUCT_INSLIDE_FAIL,
      payload: 'لا يمكن تحميل المنتجات',
    })
  }
}

export const listFeaturedProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FEATURED_PRODUCTS_REQUEST })
    const data = await products.filter((product) => product.featured === 1)
    dispatch({ type: FEATURED_PRODUCTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FEATURED_PRODUCTS_FAIL,
      payload: 'لا يمكن تحميل المنتجات',
    })
  }
}

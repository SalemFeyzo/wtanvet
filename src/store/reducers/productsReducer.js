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

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCTS_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
export const productInSlideReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_INSLIDE_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_INSLIDE_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_INSLIDE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const featuredProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case FEATURED_PRODUCTS_REQUEST:
      return { loading: true, products: [] }
    case FEATURED_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload }
    case FEATURED_PRODUCTS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

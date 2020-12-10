import { combineReducers } from 'redux'
import {
  productListReducer,
  productDetailsReducer,
  productInSlideReducer,
  featuredProductsReducer,
} from './productsReducer'
import contactInfoReducer from './contactInfoReducer'
import carouselPicsReducer from './carouselPicsReducer'

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  contactInfo: contactInfoReducer,
  carouselPics: carouselPicsReducer,
  productInSlide: productInSlideReducer,
  carouselPicsList: carouselPicsReducer,
  featuredProducts: featuredProductsReducer,
})

export default rootReducer

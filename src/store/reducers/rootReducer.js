import { combineReducers } from 'redux'
import { productListReducer, productDetailsReducer } from './productsReducer'
import contactInfoReducer from './contactInfoReducer'
import carouselPicsReducer from './carouselPicsReducer'

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  contactInfo: contactInfoReducer,
  carouselPics: carouselPicsReducer,
})

export default rootReducer

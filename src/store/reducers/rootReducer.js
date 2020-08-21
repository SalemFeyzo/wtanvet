import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import feturedProductsReducer from './feturedProductsReducer';
import contactInfoReducer from './contactInfoReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  contactInfo: contactInfoReducer,
  feturedProducts: feturedProductsReducer,
});

export default rootReducer;

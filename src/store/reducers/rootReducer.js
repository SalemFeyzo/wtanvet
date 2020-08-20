import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import contactInfoReducer from './contactInfoReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  contactInfo: contactInfoReducer,
});

export default rootReducer;

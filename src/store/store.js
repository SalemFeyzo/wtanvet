import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const carouselPicsFromStorage = localStorage.getItem('carouselPis')
  ? JSON.parse(localStorage.getItem('carouselPics'))
  : []
const initialState = {
  carouselPics: { carouselPics: carouselPicsFromStorage },
}
export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

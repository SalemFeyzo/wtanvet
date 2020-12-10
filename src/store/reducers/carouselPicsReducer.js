import {
  LIST_CAROUSEL_PICS_FAIL,
  LIST_CAROUSEL_PICS_REQUEST,
  LIST_CAROUSEL_PICS_SUCCESS,
} from '../constants/carouselConstants'

const carouselPicsReducer = (state = { carouselPics: [] }, action) => {
  switch (action.type) {
    case LIST_CAROUSEL_PICS_REQUEST:
      return { loading: true, carouselPics: [] }
    case LIST_CAROUSEL_PICS_SUCCESS:
      return { loading: false, carouselPics: action.payload }
    case LIST_CAROUSEL_PICS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default carouselPicsReducer

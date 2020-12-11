import {
  LIST_CAROUSEL_PICS_FAIL,
  LIST_CAROUSEL_PICS_REQUEST,
  LIST_CAROUSEL_PICS_SUCCESS,
} from '../constants/carouselConstants'
import { carouselPics } from '../data/carouselPics'

export const listCarouselPics = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_CAROUSEL_PICS_REQUEST })
    const data = await carouselPics
    dispatch({ type: LIST_CAROUSEL_PICS_SUCCESS, payload: data })
    localStorage.setItem('carouselpics', JSON.stringify(data))
  } catch (error) {
    dispatch({ type: LIST_CAROUSEL_PICS_FAIL, payload: 'مشكلة في التحميل' })
  }
}

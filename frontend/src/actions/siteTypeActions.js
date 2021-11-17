import axios from 'axios'
import {
  SITETYPE_LIST_REQUEST,
  SITETYPE_LIST_SUCCESS,
  SITETYPE_LIST_FAIL,
} from '../constants/siteTypeConstants.js'

export const listSiteTypes = () => async (dispatch) => {
  try {
    dispatch({ type: SITETYPE_LIST_REQUEST })

    const { data } = await axios.get('/api/sitetypes')

    dispatch({
      type: SITETYPE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SITETYPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
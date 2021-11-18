import axios from 'axios'
import {
  SITETYPE_LIST_REQUEST,
  SITETYPE_LIST_SUCCESS,
  SITETYPE_LIST_FAIL,
  SITETYPE_DETAILS_REQUEST,
  SITETYPE_DETAILS_SUCCESS,
  SITETYPE_DETAILS_FAIL,
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

export const listSiteTypeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SITETYPE_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/sitetypes/${id}`)

    dispatch({
      type: SITETYPE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SITETYPE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
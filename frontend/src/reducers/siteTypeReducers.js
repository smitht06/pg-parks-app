import {
    SITETYPE_LIST_REQUEST,
    SITETYPE_LIST_SUCCESS,
    SITETYPE_LIST_FAIL,
  } from '../constants/siteTypeConstants'
  
  export const siteTypeListReducer = (state = { siteTypes: [] }, action) => {
    switch (action.type) {
      case SITETYPE_LIST_REQUEST:
        return { loading: true, siteTypes: [] }
      case SITETYPE_LIST_SUCCESS:
        return { loading: false, siteTypes: action.payload }
      case SITETYPE_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
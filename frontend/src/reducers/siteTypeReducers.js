import {
    SITETYPE_LIST_REQUEST,
    SITETYPE_LIST_SUCCESS,
    SITETYPE_LIST_FAIL,
    SITETYPE_DETAILS_REQUEST,
    SITETYPE_DETAILS_SUCCESS,
    SITETYPE_DETAILS_FAIL,
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

  export const siteTypeDetailsReducer = (
    state = { siteType: [] },
    action
  ) => {
    switch (action.type) {
      case SITETYPE_DETAILS_REQUEST:
        return { loading: true, ...state }
      case SITETYPE_DETAILS_SUCCESS:
        return { loading: false, siteType: action.payload }
      case SITETYPE_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
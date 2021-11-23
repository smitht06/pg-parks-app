import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { siteTypeListReducer, siteTypeDetailsReducer, sitesFilteredListReducer } from './reducers/siteTypeReducers'


const reducer = combineReducers({
  siteTypeList: siteTypeListReducer,
  siteTypeDetails: siteTypeDetailsReducer,
  sitesFilteredList: sitesFilteredListReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
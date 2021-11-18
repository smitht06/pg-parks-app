import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { siteTypeListReducer, siteTypeDetailsReducer } from './reducers/siteTypeReducers'

const reducer = combineReducers({
  siteTypeList: siteTypeListReducer,
  siteTypeDetails: siteTypeDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
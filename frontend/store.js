import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	SITETYPEListReducer,
	siteTypeDetailsReducer,
} from './reducers/siteTypeReducers';
import { SITEListReducer } from './reducers/siteReducers copy';

const reducer = combineReducers({
	SITETYPEList: SITETYPEListReducer,
	siteTypeDetails: siteTypeDetailsReducer,
	siteList: SITEListReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import axios from 'axios';
import {
	SITE_LIST_SUCCESS,
	SITE_LIST_REQUEST,
	SITE_LIST_FAIL,
	SITE_DETAILS_REQUEST,
	SITE_DETAILS_SUCCESS,
	SITE_DETAILS_FAIL,
	SITE_RENTALS_REQUEST,
	SITE_RENTALS_SUCCESS,
	SITE_RENTALS_FAIL,
} from '../constants/siteConstants';

export const listSites = () => async (dispatch) => {
	try {
		dispatch({ type: SITE_LIST_REQUEST });
		const { data } = await axios.get('api/sites');

		dispatch({
			type: SITE_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: SITE_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

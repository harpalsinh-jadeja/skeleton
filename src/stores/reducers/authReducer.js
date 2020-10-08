import { AUTH_WATCHER, AUTH_SUCCESS, AUTH_FAILURE } from '../types';

const initialState = {
	data: null,
	error: null,
	loader: false
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case AUTH_WATCHER:
			return {
				loader: true
			};
		case AUTH_SUCCESS:
			return {
				data: action.payload,
				loader: false
			};
		case AUTH_FAILURE:
			return {
				error: action.payload,
				loader: false
			};
		default:
			return state;
	}
}

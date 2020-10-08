import { AUTH_WATCHER } from '../types';
import { authSuccess, authError } from '../actions';

import { put, takeLatest, call } from 'redux-saga/effects';
// import { API_URL, BASE_URL } from 'src/axios/config';
// import axios from 'src/axios';

function loginApi(authParams) {
	// api call
	// return axios.request({
	// 	method: 'post',
	// 	url: BASE_URL + API_URL.LOGIN,
	// 	data: authParams
	// });
}

function* authActionEffect(loginAction) {
	let { payload, resolve, reject } = loginAction;
	try {
		let response = yield call(loginApi, payload);
		if (response.success) {
			yield put(authSuccess(response.data));
			resolve(response);
		}
		else {
			yield put(authError(response));
			reject(response);
		}
	} catch (e) {
		yield put(authError(e.data));
		reject(e.data);
	}
}

export function* authActionWatcher() {
	yield takeLatest(AUTH_WATCHER, authActionEffect);
}

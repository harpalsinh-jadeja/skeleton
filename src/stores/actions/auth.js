import { AUTH_FAILURE, AUTH_SUCCESS, AUTH_WATCHER } from '../types';

export function authWatcher(params, resolve, reject) {
	return { type: AUTH_WATCHER, payload: params, resolve, reject };
}

export function authSuccess(data) {
	return { type: AUTH_SUCCESS, payload: data };
}

export function authError(error) {
	return { type: AUTH_FAILURE, payload: error };
}

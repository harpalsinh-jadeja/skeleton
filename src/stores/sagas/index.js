import { all } from 'redux-saga/effects';
import { authActionWatcher } from './authSaga';
export default function* rootSaga() {
	yield all([
		authActionWatcher()
	]);
}

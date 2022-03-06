import { all, fork } from 'redux-saga/effects';
import { watchUser } from './user';

export function* rootSaga() {
	yield all([
		fork(watchUser),
	]);
}

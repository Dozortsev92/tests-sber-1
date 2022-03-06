import { put, call, takeEvery } from "redux-saga/effects";
import API from 'api';

export function* watchUser() {
	yield takeEvery('GET_USER_PLAYLIST', getUserPlaylist);
}

function* getUserPlaylist({ payload }) {
	try {
		const playlistData = yield call(API.GET_USER_PLAYLIST, payload);
		const sortedPlaylist = playlistData.sort((a, b) => a.id - b.id);
		yield put({ type: 'SET_USER_PLAYLIST', payload: sortedPlaylist });
	} catch(e) {
		console.log(e);
	}
}

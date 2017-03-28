import fetch from 'isomorphic-fetch';
import { fromJS } from 'immutable';
import {
    call,
    put,
    takeEvery,
    select,
    fork
} from 'redux-saga/effects'

import { SET_CHANNEL_INFO } from './../actions'
import { userSelector } from './../selectors'
import {
    updateUserFetchStatus,
    setUserInfo,
    FETCHING,
    FETCHED,
    NOT_FETCHED
} from './../actions'

function* fetchUserInfo(id){
    const user = yield select(userSelector(id));

    if (user.get(`fetchStatus`) === NOT_FETCHED) {
        yield put(updateUserFetchStatus(id,FETCHING));
        const response = yield call(()=>fetch(`/user/${id}`));
        const userInfo = yield call(()=>response.json());
        yield put(updateUserFetchStatus(id,FETCHED));
        yield put(setUserInfo(fromJS(userInfo)));
    }
}

function* fetchChannelUsers({channel}){
    const ids = channel.get(`participants`);
    for (let id of ids) {
        yield fork(fetchUserInfo,id);
    }
}

export function* userInfoSaga() {
    yield takeEvery(SET_CHANNEL_INFO, fetchChannelUsers);
}
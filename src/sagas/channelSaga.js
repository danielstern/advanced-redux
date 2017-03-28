import { fromJS } from 'immutable';
import { takeEvery, select, put, call } from 'redux-saga/effects'
import { channelSelector } from './../selectors'
import {
    FETCHED,
    NOT_FETCHED,
    SET_ACTIVE_CHANNEL,
    setChannelInfo,
} from './../actions'

function* fetchChannelInfo({id}){
    const selector = channelSelector(id);
    const channel = yield select(selector);

    if (channel.get(`fetchStatus`) === NOT_FETCHED) {
        const response = yield call(()=>fetch(`/channel/${id}`));
        const channelInfo = yield call(()=>response.json());
        yield put(setChannelInfo(fromJS({fetchStatus:FETCHED,...channelInfo})));
    } else {
        yield;
    }
}

export function* channelSaga() {
    yield takeEvery(SET_ACTIVE_CHANNEL, fetchChannelInfo);
}
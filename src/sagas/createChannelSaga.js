import { takeEvery, put, call } from 'redux-saga/effects'

import {
    REQUEST_CREATE_CHANNEL,
    completeChannelCreation
} from './../actions'

function* requestCreateChannel({ownID,contactID,channelName,channelID}) {
    const participants = JSON.stringify([ownID,contactID]);
    yield call(()=>fetch(`/channel/create/${channelID}/${channelName}/${participants}`));
    yield put(completeChannelCreation(channelID,true));
}

export function* createChannelSaga() {
    yield takeEvery(REQUEST_CREATE_CHANNEL, requestCreateChannel);
}
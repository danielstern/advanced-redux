import { SET_ACTIVE_CHANNEL } from './../actions'
import { currentUserSelector } from './../selectors'
import { takeLatest, call, select } from 'redux-saga/effects'

function* putActiveChannel({id}){
    const currentUser = yield select(currentUserSelector);
    const userID = currentUser.get(`id`);
    yield call(()=>fetch(`/user/activeChannel/${userID}/${id}`));
}

export function* activeChannelSaga() {
    yield takeLatest(SET_ACTIVE_CHANNEL, putActiveChannel);
}
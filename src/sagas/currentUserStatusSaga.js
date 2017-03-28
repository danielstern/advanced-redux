import { UPDATE_STATUS } from './../actions'
import { currentUserSelector } from './../selectors'
import { takeLatest, call, select } from 'redux-saga/effects'

function* putUserStatus({status}){
    const currentUser = yield select(currentUserSelector);
    const id = currentUser.get(`id`);
    yield call(()=>fetch(`/status/${id}/${status}`));
}

export function* currentUserStatusSaga() {
    yield takeLatest(UPDATE_STATUS, putUserStatus);
}
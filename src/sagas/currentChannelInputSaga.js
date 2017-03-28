import { SUBMIT_CHANNEL_INPUT_TEXT } from './../actions'
import { takeEvery, call } from 'redux-saga/effects'

function* submitChannelInputText({channel,text,owner,id}){
    const channelID = channel;
    yield call(()=>fetch(`/input/submit/${owner}/${channelID}/${id}/${text}`));
}

export function* currentChannelInputSaga() {
    yield takeEvery(SUBMIT_CHANNEL_INPUT_TEXT, submitChannelInputText);
}
export { makeActionCreator } from '../utility/makeActionCreator';
export { setUserInfo, SET_USER_INFO } from './setUserInfo';
export { updateChannelInputText, UPDATE_CHANNEL_INPUT_TEXT } from './updateChannelInputText';
export { updateStatus, UPDATE_STATUS, AWAY, OFFLINE, ONLINE } from './updateStatus';
export { updateUserFetchStatus, UPDATE_USER_FETCH_STATUS } from './updateUserFetchStatus';
export { setActiveChannel, SET_ACTIVE_CHANNEL } from './setActiveChannel';
export { updateChannelLoadedStatus, UPDATE_CHANNEL_FETCHED_STATUS } from './updateChannelLoadedStatus';
export { setChannelInfo, SET_CHANNEL_INFO } from './setChannelInfo';
export { submitChannelInputText, SUBMIT_CHANNEL_INPUT_TEXT } from './submitChannelInputText'
export { receiveMessage, RECEIVE_MESSAGE } from './receiveMessage';
export { openContactChannel } from './openContactChannel';
export { requestCreateChannel, REQUEST_CREATE_CHANNEL } from './requestCreateChannel';
export { completeChannelCreation, COMPLETE_CHANNEL_CREATION} from './completeChannelCreation';

export const NOT_FETCHED = `NOT_FETCHED`;
export const FETCHING = `FETCHING`;
export const FETCHED = `FETCHED`;

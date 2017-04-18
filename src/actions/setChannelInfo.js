import { makeActionCreator } from '../utility';

export const SET_CHANNEL_INFO = `SET_CHANNEL_INFO`;
export const setChannelInfo = makeActionCreator(SET_CHANNEL_INFO, `channel`);
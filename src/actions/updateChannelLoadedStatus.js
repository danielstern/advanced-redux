import { makeActionCreator } from './';

export const UPDATE_CHANNEL_FETCHED_STATUS = `UPDATE_CHANNEL_FETCHED_STATUS`;
export const updateChannelLoadedStatus = makeActionCreator(UPDATE_CHANNEL_FETCHED_STATUS, `channel`,`status`);
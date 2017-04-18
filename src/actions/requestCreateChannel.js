import { makeActionCreator } from '../utility';

export const REQUEST_CREATE_CHANNEL = `REQUEST_CREATE_CHANNEL`;
export const requestCreateChannel = makeActionCreator(REQUEST_CREATE_CHANNEL, `channelID`,`contactID`,`ownID`,`channelName`);
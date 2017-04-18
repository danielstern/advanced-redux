import { makeActionCreator } from '../utility';

export const RECEIVE_MESSAGE = `RECEIVE_MESSAGE`;
export const receiveMessage = makeActionCreator(RECEIVE_MESSAGE, `message`);
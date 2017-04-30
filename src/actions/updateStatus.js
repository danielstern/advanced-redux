import { makeActionCreator } from './';

export const UPDATE_STATUS = `UPDATE_STATUS`;
export const ONLINE = `ONLINE`;
export const OFFLINE = `OFFLINE`;
export const AWAY = `AWAY`;

export const updateStatus = makeActionCreator(UPDATE_STATUS, `status`);

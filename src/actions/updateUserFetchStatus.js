import { makeActionCreator } from '../utility/makeActionCreator';

export const UPDATE_USER_FETCH_STATUS = `UPDATE_USER_FETCH_STATUS`;
export const updateUserFetchStatus = makeActionCreator(UPDATE_USER_FETCH_STATUS, `id`,`status`);
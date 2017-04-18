import { makeActionCreator } from '../utility';

export const SET_ACTIVE_CHANNEL = `SET_ACTIVE_CHANNEL`;
export const setActiveChannel = makeActionCreator(SET_ACTIVE_CHANNEL, `id`);
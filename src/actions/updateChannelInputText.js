import { makeActionCreator } from './';

export const UPDATE_CHANNEL_INPUT_TEXT = `UPDATE_CHANNEL_INPUT_TEXT`;
export const updateChannelInputText = makeActionCreator(UPDATE_CHANNEL_INPUT_TEXT, `channel`,`text`);
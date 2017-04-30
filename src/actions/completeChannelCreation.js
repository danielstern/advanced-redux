import { makeActionCreator } from '../utility';

export const COMPLETE_CHANNEL_CREATION = `COMPLETE_CHANNEL_CREATION`;
export const completeChannelCreation = makeActionCreator(COMPLETE_CHANNEL_CREATION, `channelID`, `success`);
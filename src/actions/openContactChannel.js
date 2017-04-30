import { chance } from './../utility'

import {
    setActiveChannel,
    requestCreateChannel
} from './'

import {
    currentUserSelector,
    userSelector
} from './../selectors'

export const openContactChannel = (id)=>(dispatch, getState)=>{
    const state = getState();
    const existingChannel = state.get(`channels`).find(channel=> channel.get(`participants`).size === 2 && channel.get(`participants`).includes(id));
    if (existingChannel) {
        dispatch(setActiveChannel(existingChannel.get(`id`)));
    } else {
        const channelID = chance.guid();
        const currentUserID = currentUserSelector(state).get(`id`);
        const channelName =  `${currentUserSelector(state).get(`name`)} and ${userSelector(id)(state).get(`name`)}'s Private Chat`;
        dispatch(requestCreateChannel(channelID, id, currentUserID, channelName));
        dispatch(setActiveChannel(channelID));
    }
};
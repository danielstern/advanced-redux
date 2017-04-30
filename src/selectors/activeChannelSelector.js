import { createSelector } from 'reselect';

export const activeChannelSelector = createSelector(
    state=>state.get(`activeChannel`),
    state=>state.get(`channels`),
    (activeChannel,channels)=>{return channels.find(channel=>channel.get(`id`)=== activeChannel)}
);
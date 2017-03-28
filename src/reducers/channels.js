import {
    UPDATE_CHANNEL_INPUT_TEXT,
    UPDATE_CHANNEL_FETCHED_STATUS,
    SET_CHANNEL_INFO,
    SUBMIT_CHANNEL_INPUT_TEXT,
    RECEIVE_MESSAGE,
    REQUEST_CREATE_CHANNEL,
    COMPLETE_CHANNEL_CREATION,
    FETCHED
} from './../actions/'

import { createReducer } from './../utility';

import {
    fromJS
} from 'immutable';

const receiveMessageHandler = (state,{message:{id,channelID,content,owner}})=>{
    const index = state.findIndex(channel=>channel.get(`id`) === channelID);
    if (index === -1) {
        return state;
    }
    let channel = state.get(index);
    let messages = channel.get(`messages`);

    if (messages.map(message=>message.get(`id`)).includes(id)) {
        return state;
    }

    let newMessages = messages.push(fromJS({
        id, content, owner, date:new Date()
    }));

    return state.setIn([index,`messages`],newMessages);

};

const requestCreateChannelHandler = (state,{ownID,contactID, channelID, channelName})=>{
    return state.push(fromJS({
        id:channelID,
        participants:[ownID,contactID],
        fetchStatus:`FETCHING`,
        messages:[],
        name:channelName
    }));
};

const completeChannelCreationHandler = (state,{channelID,success})=>{
    const index = state.findIndex(channel=>channel.get(`id`) === channelID);
    return state.setIn([index,`fetchStatus`],FETCHED);

}

export const channels = createReducer(null, {
    [COMPLETE_CHANNEL_CREATION]:completeChannelCreationHandler,
    [REQUEST_CREATE_CHANNEL]: requestCreateChannelHandler,
    [RECEIVE_MESSAGE]: receiveMessageHandler,
    [UPDATE_CHANNEL_INPUT_TEXT](state,action) {
        const index = state.findIndex(channel=>channel.get(`id`) === action.channel);
        return state.setIn([index,`currentUserText`],action.text);
    },
    [SUBMIT_CHANNEL_INPUT_TEXT](state,action) {
        const index = state.findIndex(channel=>channel.get(`id`) === action.channel);
        let channel = state.get(index);
        let messages = channel.get(`messages`);
        let id = action.id;

        let newMessages = messages.push(fromJS({
            id,
            content:{
                text:action.text
            },
            owner:action.owner,
            date:new Date()
        }));

        let newState = state.setIn([index,`messages`],newMessages);
        newState = newState.setIn([index,`currentUserText`],"");
        return newState;

    },
    [UPDATE_CHANNEL_FETCHED_STATUS](state, action) {
        const index = state.findIndex(channel=>channel.get(`id`) === action.channel);
        return state.setIn([index,`fetchStatus`],action.status);
    },
    [SET_CHANNEL_INFO](state,action) {
        const index = state.findIndex(channel=>channel.get(`id`) === action.channel.get(`id`));
        return state.set(index,action.channel);
    },
});
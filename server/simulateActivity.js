import {
    createMessage
} from './server'

import {
    channels,
    users,
    getRandomMessageText
} from './db'

import {
    chance
} from './../src/utility';

const interval = 2000;
const max = 100;
let count = 0;

const simulateCreateMessage=(user)=>{
    if (count < max) {
        count++;
        const input = getRandomMessageText(users.map(user=>user));
        const messageID = chance.guid();
        const channel = chance.pick(channels.filter(channel=>channel.participants.includes(user)));
        const channelID = channel.id;
        const userID = chance.pick(channel.participants);
        createMessage({userID,channelID,messageID,input})
    }
};

export function simulateActivity(userID){
    setInterval(simulateCreateMessage,interval,userID);
}
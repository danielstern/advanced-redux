import {
    channels,
    users
} from './'

import {
    template
} from 'lodash';

import { Chance } from 'chance';
const chance = new Chance();

const messageActions = [`collate`,`port`,`merge`,`refactor`,`check`,`deploy`,`automate`,`debug`,`erase`,`cache`,`rebase`,`transpile`,`desync`,`fork`];
const messageObjects = [`repo`,`source code`,`code base`,`sprint`,`workflow`,`debugger`,`module`,`version`,`transpiler`,`language`,`integer`,`router`];
const templates = [
    `I'm going to <%= action%> the <%= object%>.`,
    `Could you <%= action%> the <%= object%>?`,
    `I've noticed a <%= object%> that you could <%= action%>.`,
    `Is there a <%= object%> I could <%= action%>?`,
    `I'm thinking of attending a conference on <%= object%> management.`,
    `Do you know how to <%= action%> the <%= object%>?`,
    `The <%= object%> is amazing!`,
    `Note to self: <%= action%> the <%= object%>.`,
];

export const getRandomMessageText = ()=> template(chance.pick(templates))({
        action: chance.pick(messageActions),
        object: chance.pick(messageObjects)
    });

export const getRandomMessage = (userIDs)=>({
    id:chance.guid(),
    owner: chance.pick(userIDs),
    content: {
        text: getRandomMessageText()
    },
    date:chance.date({year:2017})
});

export const initializeDB = ()=>{

    const firstNames = [`Emily`,`Chuck`,`Andy`,`Edgar`,`Stephen`,`Pablo`,`Gustav`,`Jackson`,`Leonardo`];
    const lastNames = [`McCartney`,`Webber`,`Combs`,`John`,`Martin`,`Starr`,`Springstein`,`Simmons`,`Harrison`];

    let userCount = 12;
    while (userCount--) {
        users.push({
            name:`${chance.pick(firstNames)} ${chance.pick(lastNames)}`,
            id: chance.guid(),
            contacts: [],
            channels:[],
            fetchStatus:`FETCHED`,
            status:chance.pick([`ONLINE`,`OFFLINE`,`AWAY`])
        })
    }

    let contactCount = 6;
    users.forEach(user=>{
        for (let i = 0; i < contactCount; i++) {
            user.contacts.push(chance.pick(users.filter(({id}) => id !== user.id && !user.contacts.includes(id))).id);
        }
    });


    const getMessages = (userIDs,count = 12)=>{
        const messages = [];
        for (let i = count; i > 0; i--) {
            messages.push(getRandomMessage(userIDs));
        };
        return messages;
    };

    users.forEach(user=>{
        channels.push({
            id:chance.guid(),
            name:`${user.name}'s Private Channel`,
            participants:[user.id],
            messages:getMessages([user.id])
        })
    });

    users.forEach(user=>{
        const user2 = chance.pick(users.filter(_user=>_user.id !== user.id));
        channels.push({
            id:chance.guid(),
            name:`${user.name} and ${user2.name}'s Private Chat`,
            participants:[user.id,user2.id],
            messages:getMessages([user.id,user2.id])
        })
    });

    channels.push({
        id:chance.guid(),
        name:`Group Chat`,
        participants:users.map(user=>user.id),
        messages:getMessages(users.map(user=>user.id),28)
    });

    users.forEach(user=>{
        user.activeChannel = chance.pick(channels.filter(channel=>channel.participants.includes(user.id))).id;
    });
};
import React from 'react'
import {
    OFFLINE,
    FETCHED,
    FETCHING
} from './../../actions'
import { MessageContainer } from './../Message/MessageContainer'
export const ChannelContent = ({messages,channelName,status,fetchStatus})=>(
    <div>
        <h4>
            Channel: {channelName}
        </h4>
        {status === OFFLINE ? <h5>
            Contacts in the channel will see you as offline.
        </h5> : null}
        <div>
            {fetchStatus !== FETCHED ? <span>Please wait...</span> : null}
            {messages.size === 0  && fetchStatus === FETCHED ? <span>Be the first to say something.</span> : null}
            {messages.map(message=>(
                <div key={message.get(`id`)}>
                    <MessageContainer message={message}/>
                </div>
            ))}
        </div>
    </div>
);

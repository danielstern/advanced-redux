import React from 'react'
import {ChannelListItem} from './ChannelListItem'
export const ChannelList = ({channels,activeChannel,setActiveChannel})=>(
    <div>
        <div>
            <h3>Channels</h3>
        </div>
        <div className="list-group">
            {channels.map(channel=>
                <ChannelListItem id={channel.get(`id`)}
                                 key={channel.get(`id`)}
                                 name={channel.get(`name`)}
                                 setActiveChannel={setActiveChannel}
                                 isActive={channel.get(`id`) === activeChannel}
                />
            )}
        </div>
    </div>
);

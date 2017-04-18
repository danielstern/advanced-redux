import React from 'react'
import classnames from 'classnames';


export const ChannelListItem = ({id,name,setActiveChannel,isActive})=>{
    const className = classnames('list-group-item',{active:isActive});
    return (
        <a href="#" className={className} onClick={()=>setActiveChannel(id)}>{name}</a>
    )
};
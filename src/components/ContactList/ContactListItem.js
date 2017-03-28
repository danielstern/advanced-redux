import React from 'react'
import { OFFLINE } from './../../actions'
import Chance from 'chance';

export const ContactListItem = ({id,name,status,openChannel})=>(
    <div>
        <div className="media">
            <div className="media-left">
                <a href="#">
                    <img className="media-object" style={{width:75, height:75, backgroundColor:new Chance(id).color({format:"rgb"})}}/>
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{name}</h4>
                {status !== OFFLINE ? <span className="btn btn-default" onClick={()=>openChannel(id)} disabled={!status || status === OFFLINE}>
                    Chat
                </span> : <span>(Offline)</span>}
            </div>
        </div>
    </div>
);
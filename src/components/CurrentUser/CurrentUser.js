import React from 'react'
import {
    ONLINE,
    OFFLINE,
    AWAY
} from './../../actions'
export const CurrentUser = ({name,status,updateStatus,id})=>(
    <div>
        <div>
            <h3>Hi, {name}!</h3>
        </div>
        <div>
            <select onChange={updateStatus} value={status} className="form-control">
                <option value={ONLINE}>Online</option>
                <option value={OFFLINE}>Offline</option>
                <option value={AWAY}>Away</option>
            </select>
        </div>
    </div>
);

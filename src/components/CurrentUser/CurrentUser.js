import React from 'react';
import {
    ONLINE,
    OFFLINE,
    AWAY
} from './../../actions'

export const CurrentUser = ({name, status, id, updateStatus})=>(
    <div>
        <div>
            <h3>
                Hi, {name}!
            </h3>
        </div>
        <div>
            <select value={status} onChange={updateStatus} className="form-control">
                <option value={ONLINE}>Online</option>
                <option value={OFFLINE}>Offline</option>
                <option value={AWAY}>Away</option>
            </select>
        </div>
    </div>
)
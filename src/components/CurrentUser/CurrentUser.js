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
        {/*<object data={`avatar/${id}.svg?width=100&height=100`} width="150" height="150" type="image/svg+xml">*/}

        {/*</object>*/}
        <div>
            <select onChange={updateStatus} value={status} className="form-control">
                <option value={ONLINE}>Online</option>
                <option value={OFFLINE}>Offline</option>
                <option value={AWAY}>Away</option>
            </select>
        </div>
    </div>
);

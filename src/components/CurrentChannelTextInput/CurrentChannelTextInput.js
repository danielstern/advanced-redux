import React from 'react'
import {
    FETCHED,
    OFFLINE
} from './../../actions'
import classnames from 'classnames';

export const CurrentChannelTextInput = ({text = "",submitMessage,updateText,activeChannel,fetchStatus,userStatus})=>{
    const buttonClass = classnames('btn','btn-default',{disabled:userStatus === OFFLINE});
    return (
    <div>
        <form onSubmit={e=>{e.preventDefault();submitMessage(text,activeChannel)}}>
            <div className="input-group">
                <input
                    value={text}
                    type="text"
                    className="form-control"
                    placeholder={(userStatus !== OFFLINE) ? `Say something` : `You are offline`}
                    onChange={(e)=>updateText(e.target.value,activeChannel)}
                    disabled={fetchStatus !== FETCHED || userStatus === OFFLINE}
                />
                <span className="input-group-btn">
                    <button className={buttonClass} type="button">Submit</button>
                </span>
            </div>
        </form>

    </div>
)};

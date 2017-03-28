import React from 'react';
export const Message = ({owner:{name},text})=>(
    <div>
        <b>
            {name}
        </b>: {text}
    </div>
)
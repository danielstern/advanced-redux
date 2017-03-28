import {
    fromJS
} from 'immutable'

import { createSelector } from 'reselect';

export const userSelector = (id)=>createSelector(
    state=>state.get(`userInfo`),
    userInfo=>{
        const user = userInfo.find(user=>user.get(`id`)===id);
        if (user) {
            return user;
        } else {
            return fromJS({
                name:"[...]",
                fetchStatus:"NOT_FETCHED",
                id
            });
        }
    }
);

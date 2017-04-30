import { createReducer } from './../utility'
import { Map } from 'immutable'
import {
    UPDATE_USER_FETCH_STATUS,
    SET_USER_INFO,
    FETCHED
} from './../actions'

export const userInfo = createReducer(null, {
    [UPDATE_USER_FETCH_STATUS](state,action) {
        const index = state.findIndex(user=>user.get(`id`) === action.id);
        if (index === -1) {
            return state.push(Map({
                id:action.id,
                fetchStatus:action.status,
                name:`[...]`
            }))
        } else {
            return state.setIn([index,`fetchStatus`],action.status);
        }
    },
    [SET_USER_INFO](state,action) {
        const index = state.findIndex(user=>user.get(`id`) === action.user.get(`id`));
        return state.set(index,action.user.set(`fetchStatus`,FETCHED));
    },

});
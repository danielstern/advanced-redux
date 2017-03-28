import { SET_ACTIVE_CHANNEL } from './../actions/setActiveChannel'
import { createReducer } from './../utility';

export const activeChannel = createReducer(null, {
    [SET_ACTIVE_CHANNEL](state,action) {
        return action.id;
    }
});
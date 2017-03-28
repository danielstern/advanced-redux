import { createReducer } from './../utility';
import { UPDATE_STATUS } from './../actions/'

export const currentUser = createReducer(null, {
    [UPDATE_STATUS](state,action) {
        return state.set(`status`,action.status);
    }
});
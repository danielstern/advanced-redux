import { channels } from './channels'
import { currentUser } from './currentUser'
import { activeChannel } from './activeChannel'
import { userInfo } from './userInfo';
import { combineReducers } from './../combineReducers';

export const reducer = combineReducers({
    currentUser,
    channels,
    activeChannel,
    userInfo,
});
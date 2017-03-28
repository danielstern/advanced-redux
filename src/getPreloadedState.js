import { fromJS } from 'immutable'

const preloadedState = fromJS(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

export const getPreloadedState = ()=>preloadedState;


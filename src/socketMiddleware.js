export const createSocketMiddleware = io => config => {
    const socket = io();
    return store => next => action => {
        for (const key in config) {
            if (action.type === key) {
                socket.emit(config[key](action));
            }
        }
        let result = next(action);
        return result;
    };
};
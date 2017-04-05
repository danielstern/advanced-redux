export const createSocketMiddleware = io => config => {
    const socket = io();
    return store => next => action => {
        for (const key in config) {
            socket.on(key, config[key]);
        }
        let result = next(action);
        return result;
    };
}
export const createSocketMiddleware = io => config => {
    const socket = io();
    for (const key in config) {
        console.log("Configuring...",key,config[key]);
        socket.on(key, ()=>{
            console.log("Middleware received...",key);
            config[key]();
        });
    }

    return store => next => action => {
        let result = next(action);
        return result;
    };
};
export const combineReducers = (config) =>{
    return (state,action)=>{
        return Object.keys(config).reduce((state,key)=>{
            const reducer = config[key];

            const previousState = state.get(key);

            const newValue = reducer(previousState,action);

            if (!newValue) {
                throw new Error(`A reducer returned undefined when reducing key::"${key}"`);
            }
            return state.set(key,newValue);
        },state);
    };
}
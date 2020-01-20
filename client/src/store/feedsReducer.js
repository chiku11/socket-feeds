const initialState = [{id: 0,title:'hello', body: 'hello world'}];

const feedsReducer = (state = initialState, action) => {
    if(action && action.type === 'update') {
        if(action.payload) {
            state.push(action.payload)
        }
        return state;
    }
    return state;
}

export default feedsReducer;
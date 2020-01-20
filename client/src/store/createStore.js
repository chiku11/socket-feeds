import { createStore, combineReducers } from "redux";

import feedsReducer from './feedsReducer';

const rootreducers = combineReducers({
    feeds: feedsReducer
})

export const store = createStore(rootreducers);
import {createStore, combineReducers} from "redux";

import sampleReducer from "./reducers/sampleReducer";
import secondReducer from "./reducers/secondReducer";

import {applyMiddleware} from 'redux';

export default createStore(
    combineReducers({
        sample: sampleReducer,
        second: secondReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

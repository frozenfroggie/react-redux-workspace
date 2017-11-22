import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import secondReducer from './secondReducer';

const combinedReducers = combineReducers({
  sampleReducer,
  secondReducer,
});

export default combinedReducers;

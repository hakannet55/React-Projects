import { combineReducers } from 'redux';
import filmReducer from './filmReducer';

const rootReducer = combineReducers({
    films: filmReducer,
});

export default rootReducer;

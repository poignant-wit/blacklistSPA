import { combineReducers } from 'redux';
import TestReducer from './test';


const rootReducer = combineReducers({
    tests: TestReducer
});

export default rootReducer;
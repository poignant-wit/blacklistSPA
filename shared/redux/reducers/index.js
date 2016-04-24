import { combineReducers } from 'redux';
import TestReducer from './test';
import { reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
    tests: TestReducer,
    form: formReducer,
});

export default rootReducer;
import {combineReducers} from 'redux';
import authReducers from './reducer_auth';

const rootReducer=combineReducers({
  auth:authReducers    
});

export default rootReducer;
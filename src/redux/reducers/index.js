import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import characterReducer from './characterReducer';

const rootReducer = combineReducers({
  loginReducer,
  characterReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import charactersReducer from './charactersReducer';

export default combineReducers({
	loginReducer,
	charactersReducer,
});

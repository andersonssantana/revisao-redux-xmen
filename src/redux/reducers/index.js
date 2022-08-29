import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import charactersReducer from './charactersReducer';

/* const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer; */

export default combineReducers({
  login: loginReducer,
  xmen: charactersReducer,
});

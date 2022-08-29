import { LOG_IN } from '../actions/index';

const INITIAL_STATE = {
  username: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOG_IN:
    return {
      ...state,
      username: action.payload,
    };
  default:
    return state;
  }
};

export default loginReducer;

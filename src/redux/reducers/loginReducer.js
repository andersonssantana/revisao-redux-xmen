import { LOG_IN } from '../actions';

const INITIAL_STATE = {
  username: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOG_IN:
    return {
      username: action.payload,
    };
  default:
    return state;
  }
};

export default loginReducer;

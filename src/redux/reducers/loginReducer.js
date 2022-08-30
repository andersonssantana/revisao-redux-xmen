const INITIAL_STATE = {
  userName: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOG_IN':
    return {
      ...state,
      userName: action.payload,
    };
  default:
    return state;
  }
};

export default loginReducer;

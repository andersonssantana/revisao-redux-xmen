const INITIAL_STATE = {
  character: [],
  loading: true,
  error: '',
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'REQUEST_CHARACTERS':
    return {
      ...state,
      loading: true,
    };
  case 'SAVE_CHARACTERS':
    return {
      ...state,
      character: [...action.payload],
      loading: false,
    };
  case 'FAILED_REQUEST':
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default characterReducer;

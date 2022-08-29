import { REQUEST_CHARACTERS, SAVE_CHARACTERS, FAILED_REQUEST } from '../actions/index';

const INITIAL_STATE = {
  characters: [],
  loading: false,
  error: '',
};

const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CHARACTERS:
    return {
      ...state,
      loading: true,
    };
  case SAVE_CHARACTERS:
    return {
      ...state,
      characters: action.payload,
      loading: false,
    };
  case FAILED_REQUEST:
    return {
      ...state,
      loading: true,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default charactersReducer;

const INITIAL_STATE = {
	characters: [],
  loading: true,
  error: '',
};

function charactersReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
    case 'REQUEST_CHARACTERS':
      return {
        ...state,
        loading: true,
      }
    case 'GET_CHARACTERS':
      return {
        ...state,
        characters: action.payload,
        loading: false,
      }
    case 'FAILED_REQUEST':
      return {
        ...state,
        loading: true,
        erro: action.payload,
      }
		default:
			return state;
	}
}

export default charactersReducer;

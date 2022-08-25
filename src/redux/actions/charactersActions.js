import fetchCharacters from "../../services/api";

function getCharacters(data) {
  return { type: 'GET_CHARACTERS', payload: data }
}

function failedRequest(error) {
  return { type: 'FAILED_REQUEST', payload: error }
}

function requestCharacters() {
  return { type: 'REQUEST_CHARACTERS' }
}

function fetchCharactersAction() {
  return async (dispatch) => {

    dispatch(requestCharacters());

    try {
      const data = await fetchCharacters()
      return dispatch(getCharacters(data));

    } catch (error) {
      dispatch(failedRequest(error))
    }
  }
}

export default fetchCharactersAction;

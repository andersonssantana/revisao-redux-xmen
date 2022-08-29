import fetchCharacters from '../../services/api';
import { SAVE_CHARACTERS, FAILED_REQUEST, REQUEST_CHARACTERS } from './index';

const saveCharacters = (data) => ({ type: SAVE_CHARACTERS, payload: data });

const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error });

const requestCharacters = () => ({ type: REQUEST_CHARACTERS });

const fetchCharactersAction = () => async (dispatch) => {
  dispatch(requestCharacters());

  try {
    const characters = await fetchCharacters();
    if (!characters) throw new Error('Não foi possível recuperar os personagens');
    dispatch(saveCharacters(characters));
  } catch (error) {
    dispatch(failedRequest(error.message));
  }
};

export default fetchCharactersAction;

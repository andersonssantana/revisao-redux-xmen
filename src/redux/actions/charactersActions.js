import fetchCharacters from '../../services/api';
import { SAVE_CHARACTERS, REQUEST_CHARACTERS, FAILED_REQUEST } from './index';

const requestCharacters = () => ({
  type: REQUEST_CHARACTERS,
});

const saveCharacters = (characters) => ({
  type: SAVE_CHARACTERS,
  payload: characters,
});

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

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

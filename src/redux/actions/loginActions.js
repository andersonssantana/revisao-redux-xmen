import { LOG_IN } from './index';

const loginAction = (username) => ({
  type: LOG_IN,
  payload: username,
});

export default loginAction;

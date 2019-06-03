import { createAction } from 'redux-actions';
import axios from 'axios';
import { message } from 'antd';

import routes from '../apiRoutes';

/**
 * [Log in actions]
 */
export const logInRequest = createAction('LOG_IN_REQUEST');
export const logInSuccess = createAction('LOG_IN_SUCCESS');
export const logInFailure = createAction('LOG_IN_FAILURE');

export const logOutAction = createAction('LOG_OUT');
export const logOut = () => (dispatch) => {
  localStorage.removeItem('TOKEN');
  dispatch(logOutAction());
};

export const logIn = ({ username, password }) => async (dispatch) => {
  dispatch(logInRequest());

  try {
    const response = await axios.post(routes.logIn(), { username, password });

    const logInData = {
      username,
      roles: response.data.roles,
      loggedIn: true,
    };
    localStorage.setItem('TOKEN', response.data.token);
    dispatch(logInSuccess({ data: logInData }));
    return response.data.token;
  } catch (e) {
    const logInData = {
      username: null,
      loggedIn: false,
    };
    message.error(e.response ? e.response.data.detail : 'Произошла ошибка. Попробуйте снова');
    dispatch(logInFailure({ data: logInData }));
  }
  return null;
};

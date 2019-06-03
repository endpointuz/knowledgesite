import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions';

/**
 * Log In reducers
 */
const logInData = handleActions({
  [actions.logInRequest](state) {
    return {
      ...state,
      isRequesting: true,
    };
  },
  [actions.logInSuccess](state, { payload: { data } }) {
    return {
      ...data,
      isRequesting: false,
    };
  },
  [actions.logInFailure](state, { payload: { data } }) {
    return {
      ...data,
      isRequesting: false,
    };
  },
  [actions.logOutAction]() {
    return {
      username: null,
      loggedIn: false,
      isRequesting: false,
    };
  },
}, {
  username: null,
  loggedIn: false,
  isRequesting: false,
});

export default combineReducers({
  logInData,
});

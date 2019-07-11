import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions';

import { courses } from '../content';

const windowData = handleActions({
  [actions.setOffsetY](state, { payload: { data } }) {
    return { ...state, offsetY: data };
  },
  [actions.setVisibilityMenu](state, { payload: { data } }) {
    return {
      ...state,
      visibilityMenu: data,
    };
  },
}, {
  offsetY: null,
  visibilityMenu: true,
});

const coursesData = handleActions({
}, courses);

export default combineReducers({
  windowData,
  coursesData,
});

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
  [actions.getCoursesSuccess](state, { payload: { data } }) {
    return {
      ...data,
      state: 'success',
    };
  },
}, {
  state: null,
  results: [],
});

const articles = handleActions({
  [actions.getArticlesRequest](state) {
    return { ...state, state: 'request' };
  },
  [actions.getArticlesFailure](state) {
    return { ...state, state: 'failure' };
  },
  [actions.getArticlesSuccess](state, { payload: { data } }) {
    return { list: data.results, state: 'success', totalCount: data.count };
  },
}, {
  list: [],
  state: null,
  totalCount: 0,
});

const articleData = handleActions({
  [actions.getArticleRequest](state) {
    return { ...state, state: 'request' };
  },
  [actions.getArticleFailure](state, { payload: { data } }) {
    return { ...state, state: 'failure', statusCode: data.status };
  },
  [actions.getArticleSuccess](state, { payload: { data } }) {
    return { ...state, content: data, state: 'success' };
  },
}, {
  content: {},
  statusCode: null,
  state: null,
});

const courseDetail = handleActions({
  [actions.getCourseDetailSuccess](state, { payload: { data } }) {
    return {
      ...data,
      state: 'success',
    };
  },
  [actions.getCourseDetailFailure](state, { payload: { data } }) {
    return {
      statusCode: data.status,
      state: 'failure',
    };
  },
}, {
  results: [],
  statusCode: null,
  state: null,
});

const requestCallData = handleActions({
  [actions.requestCallRequest](state) {
    return {
      ...state,
      state: 'request',
    };
  },
  [actions.requestCallSuccess](state) {
    return {
      ...state,
      state: 'success',
    };
  },
  [actions.requestCallFailure](state, { payload: { errors } }) {
    return {
      ...state,
      errors,
      state: 'failure',
    };
  },
}, {
  errors: [],
  state: null,
});

const snackbarVisible = handleActions({
  [actions.openSnackbar]() {
    return true;
  },
  [actions.closeSnackbar]() {
    return false;
  },
}, false);

export default combineReducers({
  windowData,
  coursesData,
  courseDetail,
  articles,
  articleData,
  requestCallData,
  snackbarVisible,
});

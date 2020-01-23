import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../apiRoutes';

export const setOffsetY = createAction('OFFSET_Y_SET');
export const setVisibilityMenu = createAction('VISIBILITY_MENU_SET');

export const openSnackbar = createAction('SNACKBAR_OPEN');
export const closeSnackbar = createAction('SNACKBAR_CLOSE');

export const getCoursesRequest = createAction('COURSES_GET_REQUEST');
export const getCoursesSuccess = createAction('COURSES_GET_SUCCESS');
export const getCoursesFailure = createAction('COURSES_GET_FAILURE');

export const getCourses = count => async (dispatch) => {
  dispatch(getCoursesRequest());
  try {
    const response = await axios.get(routes.courses(), {
      params: {
        page_size: count,
      },
    });
    dispatch(getCoursesSuccess({ data: response.data }));
  } catch (e) {
    dispatch(getCoursesFailure());
  }
};

export const getCourseDetailRequest = createAction('COURSE_DETAIL_GET_REQUEST');
export const getCourseDetailSuccess = createAction('COURSE_DETAIL_GET_SUCCESS');
export const getCourseDetailFailure = createAction('COURSE_DETAIL_GET_FAILURE');

export const getCourseDetail = slug => async (dispatch) => {
  dispatch(getCourseDetailRequest());
  try {
    const response = await axios.get(routes.courseDetail(slug));
    dispatch(getCourseDetailSuccess({ data: response.data }));
  } catch (e) {
    // console.log(e.response.status);
    dispatch(getCourseDetailFailure({ data: e.response }));
  }
};

export const getArticlesRequest = createAction('ARTICLES_GET_REQUEST');
export const getArticlesSuccess = createAction('ARTICLES_GET_SUCCESS');
export const getArticlesFailure = createAction('ARTICLES_GET_FAILURE');

export const getArticles = query => async (dispatch) => {
  dispatch(getArticlesRequest());
  try {
    const response = await axios.get(routes.articles(), { params: query });
    dispatch(getArticlesSuccess({ data: response.data }));
  } catch (e) {
    dispatch(getArticlesFailure());
    console.log(e);
  }
};

export const getArticleRequest = createAction('ARTICLE_GET_REQUEST');
export const getArticleSuccess = createAction('ARTICLE_GET_SUCCESS');
export const getArticleFailure = createAction('ARTICLE_GET_FAILURE');

export const getArticle = id => async (dispatch) => {
  dispatch(getArticleRequest());
  try {
    const response = await axios.get(routes.article(id));
    dispatch(getArticleSuccess({ data: response.data }));
  } catch (e) {
    dispatch(getArticleFailure({ data: e.response }));
    console.log(e);
  }
};

export const requestCallRequest = createAction('REQUEST_CALL_REQUEST');
export const requestCallSuccess = createAction('REQUEST_CALL_SUCCESS');
export const requestCallFailure = createAction('REQUEST_CALL_FAILURE');

export const requestCall = formData => async (dispatch) => {
  dispatch(requestCallRequest());
  try {
    await axios.post(routes.callRequest(), {
      name: formData.name.value,
      course: formData.course.value,
      phone: formData.phone.value,
    });
    dispatch(requestCallSuccess());
  } catch (e) {
    if (e.response && e.response.status === 400) {
      dispatch(requestCallFailure({ errors: e.response.data }));
    }
    dispatch(requestCallFailure({ errors: ['unknown'] }));
  }
};

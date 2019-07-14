import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../apiRoutes';

export const setOffsetY = createAction('OFFSET_Y_SET');
export const setVisibilityMenu = createAction('VISIBILITY_MENU_SET');

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

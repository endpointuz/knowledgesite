import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import FooterMain from '../components/FooterMain';
import HeaderOneCourseContainer from '../containers/HeaderOneCourseContainer';
import YougetOneCourseMain from '../components/YougetOneCourseMain';
import OpportunityOneCourseContainer from '../containers/OpportunityOneCourseContainer';
import ProgramOneCourseContainer from '../containers/ProgramOneCourseContainer';
import TeacherOneCourseContainer from '../containers/TeacherOneCourseContainer';
import AppointmentOneCourseContainer from '../containers/AppointmentOneCourseContainer';
import NotFound from './NotFound';
import MySnackbar from '../components/ep-components/Snackbar';
import * as actions from '../actions';

const mapStateToProps = state => ({
  courseDetail: state.courseDetail,
  requestCallData: state.requestCallData,
  snackbarVisible: state.snackbarVisible,
});

const actionCreators = {
  getCourseDetail: actions.getCourseDetail,
  getCourses: actions.getCourses,
  closeSnackbar: actions.closeSnackbar,
};

@connect(mapStateToProps, actionCreators)
@withRouter
class SingleCourse extends React.Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    const { getCourseDetail, getCourses, location } = this.props;
    getCourses(30);
    const slug = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    getCourseDetail(slug);

    setTimeout(() => {
      this.setState({ visible: true });
      document.querySelector('.loader').classList.add('loaded');
      // document.querySelector('.loader-circle').classList.add('loaded');
    }, 1500);
    setTimeout(() => {
      document.querySelector('.loader-circle').classList.add('loaded');
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
      clearTimeout(this.timerHandle2);
      this.timerHandle2 = 0;
    }
    document.querySelector('.loader').classList.remove('loaded');
    document.querySelector('.loader-circle').classList.remove('loaded');
  }

  render() {
    const {
      courseDetail,
      requestCallData,
      snackbarVisible,
      closeSnackbar,
    } = this.props;

    return courseDetail.statusCode !== 404
      ? (
        <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
          {
            courseDetail.name
              ? <Helmet>
                  <title>{courseDetail.name} | Knowledge</title>
                  <meta name="description" content={courseDetail.description} />
                  <meta name="keywords" content="курс, учебный, программа курса, javascript, html, css, обучение в Ташкент, курсы в Ташкент" />
                  <meta property="og:type" content="article" />
                  <meta property="og:site_name" content="Knowledge.uz" />
                  <meta property="og:title" content={courseDetail.name} />
                  <meta property="og:description" content={courseDetail.description} />
                  <meta property="og:url" content={`https://knowledge.uz/courses/${courseDetail.slug}/`} />
                  <meta property="og:image" content={courseDetail.picture} />
                  <meta property="og:locale" content="ru_RU" />
                </Helmet>
              : null
          }
          <MySnackbar
            requestCallData={requestCallData}
            snackbarVisible={snackbarVisible}
            closeSnackbar={closeSnackbar}
          />
          <HeaderOneCourseContainer
            startAt={courseDetail.started_at}
            totalLessons={courseDetail.duration}
            period={courseDetail.period}
            price={courseDetail.price}
            courseImage={courseDetail.picture}
            title={courseDetail.name}
            description={courseDetail.description}
          />
          <OpportunityOneCourseContainer
            opportunity={courseDetail.text_blocks}
          />
          <ProgramOneCourseContainer
            courseProgram={courseDetail.course_program}
          />
          <TeacherOneCourseContainer
            teachers={courseDetail.teachers}
          />
          <div className="youget">
            <YougetOneCourseMain />
          </div>
          <AppointmentOneCourseContainer
            startDate={courseDetail.started_at}
            price={courseDetail.price}
          />
          <footer className="footer">
            <FooterMain />
          </footer>
        </div>
      )
      : <NotFound />;
  }
}

const loadData = (store, match, cookie) => {
  const actionsToBeDispatched = [];

  actionsToBeDispatched.push(store.dispatch(actions.getCourseDetail(match.params.name)));

  return Promise.all(actionsToBeDispatched);
};

export default {
  loadData,
  component: SingleCourse,
};

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import FooterMain from '../components/FooterMain';
import HeaderContainer from '../containers/HeaderContainer';
import CourseMain from '../components/CourseMain';
import * as actions from '../actions';
import MySnackbar from '../components/ep-components/Snackbar';



const mapStateToProps = state => ({
  coursesData: state.coursesData,
  requestCallData: state.requestCallData,
  snackbarVisible: state.snackbarVisible,
});

const actionCreators = {
  getCourses: actions.getCourses,
  closeSnackbar: actions.closeSnackbar,
};

@connect(mapStateToProps, actionCreators)
class Courses extends React.Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    const { getCourses } = this.props;
    getCourses(30);
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
      coursesData,
      requestCallData,
      snackbarVisible,
      closeSnackbar,
    } = this.props;
    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <MySnackbar
          requestCallData={requestCallData}
          snackbarVisible={snackbarVisible}
          closeSnackbar={closeSnackbar}
        />
        <Helmet>
          <title>Все курсы | Knowledge</title>
          <meta name="description" content="Страница всех курсов от профессиональной команды разработчиков endpoint.uz" />
          <meta name="keywords" content="учебные курсы в Ташкент, программирование, веб-технологии, проекты, учебный центр, создание сайтов, endpoint.uz" />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Knowledge.uz" />
          <meta property="og:title" content="Knowledge.uz | Лучшие курсы программирования в Ташкенте" />
          <meta property="og:description" content="Мы расскажем, покажем и научим тебя провильному порграммированию и дадим возможность стажироваться!" />
          <meta property="og:url" content="https://knowledge.uz" />
          <meta property="og:image" content={coursesData.results.length > 0 ? coursesData.results[0].picture : null} />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
        <HeaderContainer />
        <div className="course">
          <CourseMain
            coursesData={coursesData}
            showLinkToAllCourses={false}
          />
        </div>
        <footer className="footer">
          <FooterMain />
        </footer>
      </div>
    );
  }
}

export default Courses;

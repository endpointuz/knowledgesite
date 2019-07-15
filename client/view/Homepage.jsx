import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import CourseMain from '../components/CourseMain';
import ProfitMain from '../components/ProfitMain';
import TechnologiesMain from '../components/TechnologiesMain';
import CiteMain from '../components/CiteMain';
import AppointmentMain from '../components/AppointmentMain';
import FooterMain from '../components/FooterMain';
import HeaderContainer from '../containers/HeaderContainer';
import * as actions from '../actions';

import sharePic from '../assets/img/share.jpg';

const mapStateToProps = state => ({
  coursesData: state.coursesData,
});

const actionCreators = {
  getCourses: actions.getCourses,
};

@connect(mapStateToProps, actionCreators)
class Homepage extends React.Component {
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
    const { coursesData } = this.props;

    return (
      <>
        <Helmet>
          <title>Главная | Knowledge</title>
          <meta name="description" content="Главная страница сайта knowledge.uz. Учебные курсы от профессиональной команды разработчиков в Ташкент" />
          <meta name="keywords" content="учебные курсы в Ташкент, программирование, веб-технологии, проекты, учебный центр, создание сайтов" />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Knowledge.uz" />
          <meta property="og:title" content="Knowledge.uz | Лучшие курсы программирования в Ташкенте" />
          <meta property="og:description" content="Мы расскажем, покажем и научим тебя правильному программированию и дадим возможность стажироваться!" />
          <meta property="og:url" content="https://knowledge.uz" />
          <meta property="og:image" content={`https://knowledge.uz${sharePic}`} />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
        <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
          <HeaderContainer />
          <div className="course">
            <CourseMain
              coursesData={coursesData}
              courseCount={2}
              showLinkToAllCourses={true}
            />
          </div>
          <div className="profit">
            <ProfitMain />
          </div>
          <div className="technologies">
            <TechnologiesMain />
          </div>
          <div className="cite">
            <CiteMain />
          </div>
          <div className="appointment">
            <AppointmentMain />
          </div>
          <footer className="footer">
            <FooterMain />
          </footer>
        </div>
      </>
    );
  }
}

const loadData = (store, match, cookie) => {
  const actionsToBeDispatched = [];
  actionsToBeDispatched.push(store.dispatch(actions.getCourses(30)));

  return Promise.all(actionsToBeDispatched);
};

export default {
  loadData,
  component: Homepage,
};

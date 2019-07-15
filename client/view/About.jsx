import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import FooterMain from '../components/FooterMain';
import HeaderMenu from '../components/HeaderMenu';
import HeaderAboutMain from '../components/HeaderAboutMain';
import AboutUsMain from '../components/AboutUsMain';
import AboutNumbers from '../components/AboutNumbers';
import AboutTarget from '../components/AboutTarget';
import AboutAdvantages from '../components/AboutAdvantages';
import AppointmentMain from '../components/AppointmentMain';
import * as actions from '../actions';


const mapStateToProps = state => ({
  coursesData: state.coursesData,
});

const actionCreators = {
  getCourses: actions.getCourses,
};

@connect(mapStateToProps, actionCreators)
class About extends React.Component {
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

    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <Helmet>
          <title>О проекте | Knowledge</title>
          <meta name="description" content="О проекте knowledge.uz. Учебные курсы от профессиональной команды разработчиков в Ташкент" />
          <meta name="keywords" content="учебные курсы в Ташкент, программирование, веб-технологии, проекты, учебный центр, создание сайтов" />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Knowledge.uz" />
          <meta property="og:title" content="Knowledge.uz | Лучшие курсы программирования в Ташкенте" />
          <meta property="og:description" content="Мы расскажем, покажем и научим тебя провильному порграммированию и дадим возможность стажироваться!" />
          <meta property="og:url" content="https://knowledge.uz" />
          <meta property="og:image" content="http://94.158.52.41:8888/media/girl-big_vNDgE7v.png" />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
        <header className="header with-padding">
          <div className="header-top">
            <HeaderMenu />
          </div>
          <HeaderAboutMain />
        </header>
        <AboutUsMain />
        <AboutNumbers />
        <AboutTarget />
        <AboutAdvantages />
        <div className="appointment">
          <AppointmentMain />
        </div>
        <footer className="footer">
          <FooterMain />
        </footer>
      </div>
    );
  }
}

export default About;

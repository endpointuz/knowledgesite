import React from 'react';

import CourseMain from '../components/CourseMain';
import ProfitMain from '../components/ProfitMain';
import TechnologiesMain from '../components/TechnologiesMain';
import CiteMain from '../components/CiteMain';
import AppointmentMain from '../components/AppointmentMain';
import FooterMain from '../components/FooterMain';
import HeaderContainer from '../containers/HeaderContainer';

class Homepage extends React.Component {
  state = {
    visible: false,
  }

  componentDidMount() {
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
    document.querySelector('.loader').classList.remove('loaded');
    document.querySelector('.loader-circle').classList.remove('loaded');
  }

  render() {
    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <HeaderContainer />
        <div className="course">
          <CourseMain
            filter={course => (course.id === 'html-beginner' || course.id === 'js-beginner')}
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
    );
  }
}

export default Homepage;

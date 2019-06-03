import React from 'react';

import HeaderMenu from '../components/HeaderMenu';
import HeaderMain from '../components/HeaderMain';
import CourseMain from '../components/CourseMain';
import ProfitMain from '../components/ProfitMain';
import TechnologiesMain from '../components/TechnologiesMain';
import CiteMain from '../components/CiteMain';
import AppointmentMain from '../components/AppointmentMain';
import FooterMain from '../components/FooterMain';

class Homepage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <div className="header-top">
            <HeaderMenu />
          </div>
          <HeaderMain />
        </header>
        <div className="course">
          <CourseMain />
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

import React from 'react';
import { withRouter } from 'react-router-dom';

import FooterMain from '../components/FooterMain';
import HeaderOneCourseContainer from '../containers/HeaderOneCourseContainer';
import YougetOneCourseMain from '../components/YougetOneCourseMain';
import OpportunityOneCourseContainer from '../containers/OpportunityOneCourseContainer';
import ProgramOneCourseContainer from '../containers/ProgramOneCourseContainer';
import TeacherOneCourseContainer from '../containers/TeacherOneCourseContainer';
import AppointmentOneCourseContainer from '../containers/AppointmentOneCourseContainer';

@withRouter
class SingleCourse extends React.Component {
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
        <HeaderOneCourseContainer />
        <OpportunityOneCourseContainer />
        <ProgramOneCourseContainer />
        <TeacherOneCourseContainer />
        <div className="youget">
          <YougetOneCourseMain />
        </div>
        <AppointmentOneCourseContainer />
        <footer className="footer">
          <FooterMain />
        </footer>
      </div>
    );
  }
}

export default SingleCourse;

import React from 'react';
import { Link } from 'react-router-dom';

import FooterMain from '../components/FooterMain';
import HeaderOneCourseContainer from '../containers/HeaderOneCourseContainer';
import OpportunityOneCourseMain from '../components/OpportunityOneCourseMain';
import ProgramOneCourseMain from '../components/ProgramOneCourseMain';
import TeacherOneCourseMain from '../components/TeacherOneCourseMain';
import YougetOneCourseMain from '../components/YougetOneCourseMain';
import CourseStart from '../components/CourseStart';


class JsBegginer extends React.Component {
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
        <div className="opportunity">
          <OpportunityOneCourseMain />
        </div>
        <div className="program">
          <ProgramOneCourseMain />
        </div>
        <div className="teacher">
          <TeacherOneCourseMain />
        </div>
        <div className="youget">
          <YougetOneCourseMain />
        </div>
        <div className="appointment appointment-course">
          <CourseStart
            startDate="5 июля"
            price="600 000"
          />
        </div>
        <footer className="footer">
          <FooterMain />
        </footer>
      </div>
    );
  }
}

export default JsBegginer;

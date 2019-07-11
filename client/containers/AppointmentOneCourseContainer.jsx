import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TeacherOneCourseMain from '../components/TeacherOneCourseMain';
import CourseStart from '../components/CourseStart';

const mapStateToProps = state => ({
  coursesData: state.coursesData,
});

@withRouter
@connect(mapStateToProps)
class AppointmentOneCourseContainer extends React.Component {

  render() {
    const { pathname } = this.props.location;
    const {
      coursesData,
    } = this.props;

    const id = pathname.substring(pathname.lastIndexOf('/') + 1);

    const [content] = coursesData.filter(singleContent => String(singleContent.id) === id);

    return (
      <div className="appointment appointment-course">
        <CourseStart
          startDate={content.pageData.startAt}
          price={content.pageData.price}
        />
      </div>
    );
  }
}

export default AppointmentOneCourseContainer;

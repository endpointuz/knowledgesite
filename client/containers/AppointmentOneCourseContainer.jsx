import React from 'react';
import CourseStart from '../components/CourseStart';


class AppointmentOneCourseContainer extends React.Component {

  render() {
    return (
      <div className="appointment appointment-course">
        <CourseStart
          startDate={this.props.startDate}
          price={this.props.price}
        />
      </div>
    );
  }
}

export default AppointmentOneCourseContainer;

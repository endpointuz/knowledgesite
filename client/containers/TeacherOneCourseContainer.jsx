import React from 'react';
import TeacherOneCourseMain from '../components/TeacherOneCourseMain';

class TeacherOneCourseContainer extends React.Component {

  render() {

    return (
      <div className="teacher">
        <TeacherOneCourseMain
          teachers={this.props.teachers}
        />
      </div>
    );
  }
}

export default TeacherOneCourseContainer;

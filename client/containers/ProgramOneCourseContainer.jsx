import React from 'react';
import ProgramOneCourseMain from '../components/ProgramOneCourseMain';


class ProgramOneCourseContainer extends React.Component {

  render() {
    return (
      <div className="program">
        <ProgramOneCourseMain
          courseProgram={this.props.courseProgram}
        />
      </div>
    );
  }
}

export default ProgramOneCourseContainer;

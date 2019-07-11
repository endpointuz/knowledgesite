import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProgramOneCourseMain from '../components/ProgramOneCourseMain';

const mapStateToProps = state => ({
  coursesData: state.coursesData,
});

@withRouter
@connect(mapStateToProps)
class ProgramOneCourseContainer extends React.Component {

  render() {
    const { pathname } = this.props.location;
    const {
      coursesData,
    } = this.props;

    const id = pathname.substring(pathname.lastIndexOf('/') + 1);

    const [content] = coursesData.filter(singleContent => String(singleContent.id) === id);

    return (
      <div className="program">
        <ProgramOneCourseMain
          courseProgram={content.pageData.courseProgram}
        />
      </div>
    );
  }
}

export default ProgramOneCourseContainer;

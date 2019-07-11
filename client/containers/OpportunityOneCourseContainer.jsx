import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import OpportunityOneCourseMain from '../components/OpportunityOneCourseMain';

const mapStateToProps = state => ({
  coursesData: state.coursesData,
});

@withRouter
@connect(mapStateToProps)
class OpportunityOneCourseContainer extends React.Component {

  render() {
    const { pathname } = this.props.location;
    const {
      coursesData,
    } = this.props;

    const id = pathname.substring(pathname.lastIndexOf('/') + 1);

    const [content] = coursesData.filter(singleContent => String(singleContent.id) === id);

    return (
      <div className="opportunity">
        <OpportunityOneCourseMain
          opportunity={content.pageData.opportunity}
        />
      </div>
    );
  }
}

export default OpportunityOneCourseContainer;

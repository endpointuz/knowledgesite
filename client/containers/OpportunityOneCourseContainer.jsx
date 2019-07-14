import React from 'react';
import OpportunityOneCourseMain from '../components/OpportunityOneCourseMain';

class OpportunityOneCourseContainer extends React.Component {

  render() {

    return (
      <div className="opportunity">
        <OpportunityOneCourseMain
          opportunity={this.props.opportunity}
        />
      </div>
    );
  }
}

export default OpportunityOneCourseContainer;

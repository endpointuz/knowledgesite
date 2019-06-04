import React from 'react';
import { connect } from 'react-redux';

import CourseMain from '../components/CourseMain';
import ProfitMain from '../components/ProfitMain';
import TechnologiesMain from '../components/TechnologiesMain';
import CiteMain from '../components/CiteMain';
import AppointmentMain from '../components/AppointmentMain';
import FooterMain from '../components/FooterMain';
import HeaderContainer from '../containers/HeaderContainer';
import * as actions from '../actions';

const mapStateToProps = state => ({
  windowOffsetY: state.windowData.offsetY,
  menuVisibility: state.windowData.visibilityMenu,
});

const actionCreators = {
  setOffsetY: actions.setOffsetY,
  setVisibilityMenu: actions.setVisibilityMenu,
};

class Homepage extends React.Component {
  componentDidMount() {
    this.props.setOffsetY({ data: window.pageYOffset });
  }

  render() {
    return (
      <div className="wrapper">
        <HeaderContainer
          windowOffsetY={this.props.windowOffsetY}
          setOffset={this.props.setOffsetY}
          setVisibilityMenu={this.props.setVisibilityMenu}
          menuVisibility={this.props.menuVisibility}
        />
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

const loadData = (store, match, cookie) => {
  const actionsToBeDispatched = [];
  actionsToBeDispatched.push(store.dispatch(actions.logIn));

  return Promise.all(actionsToBeDispatched);
};

export default {
  loadData,
  component: connect(mapStateToProps, actionCreators)(Homepage),
};

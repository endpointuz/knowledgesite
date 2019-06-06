import React from 'react';
import { Link } from 'react-router-dom';

import FooterMain from '../components/FooterMain';
import HeaderContainer from '../containers/HeaderContainer';


class Courses extends React.Component {
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
        <HeaderContainer />
        <div className="courses-list">
          <Link to="/courses/js-begginer">First</Link>
          <Link to="/">Second</Link>
        </div>
        <footer className="footer">
          <FooterMain />
        </footer>
      </div>
    );
  }
}

export default Courses;

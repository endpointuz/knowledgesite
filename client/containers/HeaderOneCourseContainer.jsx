import React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import HeaderOneCourseMain from '../components/HeaderOneCourseMain';

class HeaderOneCourseContainer extends React.Component {

  render() {

    return (
      <header className="header header-course with-padding">
        <div className="header-top">
          <HeaderMenu />
        </div>
        <HeaderOneCourseMain
          {...this.props}
        />
      </header>
    );
  }
}


export default HeaderOneCourseContainer;

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
          startAt="25 Июня"
          totalLessons="40 занятий"
          period="3 раза в неделю"
          price="600 000 сумов"
        />
      </header>
    );
  }
}


export default HeaderOneCourseContainer;

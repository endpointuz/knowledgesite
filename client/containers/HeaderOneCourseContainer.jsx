import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderMenu from '../components/HeaderMenu';
import HeaderOneCourseMain from '../components/HeaderOneCourseMain';


const mapStateToProps = state => ({
  coursesData: state.coursesData,
});

@withRouter
@connect(mapStateToProps)
class HeaderOneCourseContainer extends React.Component {

  render() {
    const { pathname } = this.props.location;
    const {
      coursesData,
    } = this.props;

    const id = pathname.substring(pathname.lastIndexOf('/') + 1);

    const [content] = coursesData.filter(singleContent => String(singleContent.id) === id);


    return (
      <header className="header header-course with-padding">
        <div className="header-top">
          <HeaderMenu />
        </div>
        <HeaderOneCourseMain
          startAt={content.pageData.startAt}
          totalLessons={content.totalLessons}
          period={content.period}
          price={content.pageData.price}
          courseImage={content.img}
          title={content.title}
          description={content.description}
        />
      </header>
    );
  }
}


export default HeaderOneCourseContainer;

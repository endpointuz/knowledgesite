import React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import HeaderBlog from '../components/HeaderBlog';

class HeaderBlogContainer extends React.Component {

  render() {
    return (
      <header className="header header-course with-padding">
        <div className="header-top">
          <HeaderMenu />
        </div>
        <HeaderBlog />
      </header>
    );
  }
}


export default HeaderBlogContainer;

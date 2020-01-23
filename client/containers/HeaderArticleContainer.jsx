import React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import HeaderArticle from '../components/HeaderArticle';

class HeaderArticleContainer extends React.Component {

  render() {
    const { title, description } = this.props;
    return (
      <header className="header with-padding">
        <div className="header-top">
          <HeaderMenu />
        </div>
        <HeaderArticle title={title} description={description} />
      </header>
    );
  }
}


export default HeaderArticleContainer;

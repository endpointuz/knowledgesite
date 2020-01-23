import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from 'react-redux';
import FooterMain from '../components/FooterMain';
import HeaderArticleContainer from '../containers/HeaderArticleContainer';
import ArticleBodyContainer from '../containers/ArticleBodyContainer';
import NotFound from './NotFound';
import * as actions from '../actions';
import { last } from 'lodash';


const actionCreators = {
  getArticle: actions.getArticle,
};

const mapStateToProps = state => ({
  articleData: state.articleData,
});

@connect(mapStateToProps, actionCreators)
@withRouter
class Article extends React.Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    const removeLoader = async () => {
      const { getArticle, location } = this.props;
      const currentSlug = last(location.pathname.split('/').filter(el => el));
      // const slug = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
      await getArticle(currentSlug);
    };
    removeLoader().then(() => {
      setTimeout(() => {
        this.setState({ visible: true });
        document.querySelector('.loader').classList.add('loaded');
        // document.querySelector('.loader-circle').classList.add('loaded');
      }, 1500);
      setTimeout(() => {
        document.querySelector('.loader-circle').classList.add('loaded');
      }, 1000);
    });
  }

  componentWillUnmount() {
    document.querySelector('.loader').classList.remove('loaded');
    document.querySelector('.loader-circle').classList.remove('loaded');
  }

  render() {
    const { articleData } = this.props;
    return articleData.statusCode !== 404 ? (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <HeaderArticleContainer
          title={articleData.content.title}
          description={ReactHtmlParser(articleData.content.description)}
        />
        <article className="article">
          <ArticleBodyContainer body={ReactHtmlParser(articleData.content.article_text)} />
        </article>
        <footer className="footer">
          <FooterMain />
        </footer>
      </div>
    ) : <NotFound />;
  }
}

const loadData = (store, match, cookie) => {
  const actionsToBeDispatched = [];
  actionsToBeDispatched.push(store.dispatch(actions.getArticle(match.params.name)));

  return Promise.all(actionsToBeDispatched);
};

export default {
  loadData,
  component: Article,
};

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
import { Helmet } from 'react-helmet';


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

  static defaultProps = {
    articleData: {
      content: {},
    },
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
    const { articleData, location } = this.props;
    return articleData.statusCode !== 404 ? (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        {
          articleData.content.title
            ? <Helmet>
              <title>{articleData.content.title} | Knowledge</title>
              <meta name="description" content={articleData.content.description.replace(/<\/?[^>]+(>|$)/g, '')} />
              <meta name="keywords" content="статья, образование, программирование, обучение, ташкент, курсы, фронтен, бэкенд, knowledge" />
              <meta property="og:type" content="article" />
              <meta property="og:site_name" content="Knowledge.uz" />
              <meta property="og:title" content={`${articleData.content.title} | Knowledge`} />
              <meta property="og:description" content={articleData.content.description.replace(/<\/?[^>]+(>|$)/g, '')} />
              <meta property="og:url" content={`https://knowledge.uz${location.pathname}`} />
              <meta property="og:image" content={articleData.content.picture} />
              <meta property="og:locale" content="ru_RU" />
            </Helmet>
            : null
        }
        <HeaderArticleContainer
          title={articleData.content.title}
          description={ReactHtmlParser(articleData.content.description)}
        />
        <article className="article">
          <ArticleBodyContainer
            body={ReactHtmlParser(articleData.content.article_text)}
            author={articleData.content.author}
            link={location}
          />
        </article>
        <footer className="footer">
          <FooterMain />
        </footer>
      </div>
    ) : <NotFound staticContext={this.props.staticContext} />;
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

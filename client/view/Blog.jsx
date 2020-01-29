import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import FooterMain from '../components/FooterMain';
import HeaderContainer from '../containers/HeaderContainer';
import HeaderBlogContainer from '../containers/HeaderBlogContainer';
import BlogArticlesContainer from '../containers/BlogArticlesContainer';
import * as actions from '../actions';
import ogPic from '../assets/img/girl-big.png';

const actionCreators = {
  getArticles: actions.getArticles,
};

// {
//   key: '1',
//     title: 'Учебник: введение в React',
//   description: 'В данном разделе мы создадим небольшую игру. У вас может возникнуть соблазн пропустить его, так как вы не пишете игры - не делайте такое поспешное решение. Методы, которые вы здесь изучите, имеют основополагающее значение для создания любых React приложений, а их освоение даст вам глубокое понимание React.',
//   category: 'Статьи',
//   date: '27 июня 2019',
//   link: '/',
// },

const mapStateToProps = state => ({
  articles: state.articles.list.map((article) => ({
    key: article.slug,
    slug: article.slug,
    title: article.title,
    description: article.description,
    date: article.modified_at,
    author: {
      name: article.author.name,
      secondName: article.author.surname,
      photo: article.author.photo,
    },
  })),
  articlesState: state.articles.state,
  articlesCount: state.articles.totalCount,
});

class Blog extends React.Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    const getArticlesPromise = async () => {
      const { getArticles } = this.props;
      await getArticles({ page: 1, page_size: 10 });
    };
    getArticlesPromise().then(() => {
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
    const { articles, articlesState, articlesCount } = this.props;
    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <Helmet>
          <title>Блог | Knowledge</title>
          <meta name="description" content="Блог учебных курсов Knowledge по программированию. Здесь публикуются авторские статьи, а также переводы и полезные очерки" />
          <meta name="keywords" content="блог, статьи, учебные курсы, knowledgeuz, knowledge uz, Ташкент, программирование" />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Knowledge.uz" />
          <meta property="og:title" content="Блог | Knowledge.uz" />
          <meta property="og:description" content="Здесь публикуются авторские статьи, связанные с изучением программирования. Рассказываем, переводим, обучаем" />
          <meta property="og:url" content="https://knowledge.uz/blog" />
          <meta property="og:image" content={ogPic} />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
        <HeaderBlogContainer />
        <div className="blog">
          <BlogArticlesContainer
            articles={articles}
            articlesState={articlesState}
            articlesCount={articlesCount}
          />
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
  actionsToBeDispatched.push(store.dispatch(actions.getArticles({ page: 1, page_size: 10 })));

  return Promise.all(actionsToBeDispatched);
};

export default {
  loadData,
  component: connect(mapStateToProps, actionCreators)(Blog),
};

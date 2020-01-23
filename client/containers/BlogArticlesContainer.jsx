import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogCard from '../components/BlogCard';
import { HeaderTitle } from '../components/ep-components';
import Pagination from '../components/ep-components/Pagination';

// const articles = [
//
//   { {
//     key: '1',
//     title: 'Учебник: введение в React',
//     description: 'В данном разделе мы создадим небольшую игру. У вас может возникнуть соблазн пропустить его, так как вы не пишете игры - не делайте такое поспешное решение. Методы, которые вы здесь изучите, имеют основополагающее значение для создания любых React приложений, а их освоение даст вам глубокое понимание React.',
//     category: 'Статьи',
//     date: '27 июня 2019',
//     link: '/',
//   },
//     key: '2',
//     title: 'Учебник: введение в React',
//     description: 'В данном разделе мы создадим небольшую игру. У вас может возникнуть соблазн пропустить его, так как вы не пишете игры - не делайте такое поспешное решение. Методы, которые вы здесь изучите, имеют основополагающее значение для создания любых React приложений, а их освоение даст вам глубокое понимание React.',
//     category: 'Статьи',
//     date: '27 июня 2019',
//     link: '/',
//   },
//   {
//     key: '3',
//     title: 'Учебник: введение в React',
//     description: 'В данном разделе мы создадим небольшую игру. У вас может возникнуть соблазн пропустить его, так как вы не пишете игры - не делайте такое поспешное решение. Методы, которые вы здесь изучите, имеют основополагающее значение для создания любых React приложений, а их освоение даст вам глубокое понимание React.',
//     category: 'Статьи',
//     date: '27 июня 2019',
//     link: '/',
//   },
// ];

const categories = [
  {
    name: 'Новости',
    count: 25,
  },
  {
    name: 'Статьи',
    count: 30,
  },
  {
    name: 'Ресурсы',
    count: 12,
  },
];



class BlogArticlesContainer extends React.Component {

  handlePaginationChange = (page) => {
    console.log(page);
  }

  render() {
    const { articles, articlesState, articlesCount } = this.props;

    return (
      <div className="blog-articles">
        <Container>
          <Row>
            <Col lg={{ span: 4, order: 2 }}>
              <div className="blog-categories">
                <div className="blog-categories-wrapper" style={{ paddingBottom: '30px' }}>
                  <HeaderTitle center={false} titleType="h4" level={4}>
                    Мы всегда говорим:
                  </HeaderTitle>
                  <div className="blog-categories-stats">
                    <div className="blog-categories-name" style={{ fontStyle: 'italic', marginTop: '30px' }}>
                      «Учитесь правильно, учите правильное»
                    </div>
                  </div>
                  {/*{categories.map(category => (*/}
                  {/*  <div className="blog-categories-stats" key={category.name}>*/}
                  {/*    <div className="blog-categories-name">*/}
                  {/*      <a href="">{category.name}</a>*/}
                  {/*    </div>*/}
                  {/*    <div className="blog-categories-count">*/}
                  {/*      {category.count}*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*))}*/}
                </div>
              </div>
            </Col>
            <Col lg={{ span: 8, order: 1 }}>
              <div className="blog-articles-list">
                {articles.map(article => (
                  <BlogCard
                    key={article.key}
                    {...article}
                  />
                ))}
              </div>
              <Pagination
                totalCount={articlesCount}
                perPage={10}
                onChange={this.handlePaginationChange}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default BlogArticlesContainer;

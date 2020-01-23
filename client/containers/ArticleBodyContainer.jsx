import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AuthorCard from '../components/AuthorCard';
import ShareArticle from '../components/ShareArticle';

class ArticleBodyContainer extends React.Component {
  static defaultProps = {
    author: {},
  }

  render() {
    const {
      body, author, link,
    } = this.props;
    return (
      <div className="article-body">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              {body}
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 12 }}>
              <AuthorCard
                name={author.name}
                surname={author.surname}
                photo={author.photo}
                description={author.description}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 12 }}>
              <ShareArticle link={link} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default ArticleBodyContainer;

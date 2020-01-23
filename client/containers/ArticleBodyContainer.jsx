import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class ArticleBodyContainer extends React.Component {

  render() {
    return (
      <div className="article-body">
        <Container>
          <Row>
            <Col lg={{ span: 12 }}>
              {this.props.body}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default ArticleBodyContainer;

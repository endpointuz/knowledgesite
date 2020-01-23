import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderTitle } from './ep-components';

const HeaderArticle = ({
  title,
  description,
}) => (
  <div className="header-blog">
    <Container className="p-0">
      <Row noGutters={true} className="marginBottom">
        <Col xl={8}>
          <HeaderTitle center={false} titleType="h2" style={{ marginBottom: 15 }}>
            {title}
          </HeaderTitle>
          <div className="esubtitle text-left">
            {description}
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HeaderArticle;

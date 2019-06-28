import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderTitle } from './ep-components';

const HeaderBlog = () => (
  <div className="header-blog">
    <Container className="p-0">
      <Row noGutters={true} className="marginBottom">
        <Col xl={8}>
          <HeaderTitle center={false} titleType="h2" style={{ marginBottom: 15 }}>
            Блог
          </HeaderTitle>
          <p className="esubtitle text-left">
            Делимся опытом, ресурсами. Все для развития.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HeaderBlog;

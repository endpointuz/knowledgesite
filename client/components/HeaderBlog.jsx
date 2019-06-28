import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderTitle } from './ep-components';

const HeaderBlog = () => (
  <div className="header-blog">
    <HeaderTitle center={false} titleType="h2" style={{ marginBottom: 15 }}>
      Блог
    </HeaderTitle>
    <p className="esubtitle text-left">
      Делимся опытом, ресурсами. Все для развития.
    </p>
  </div>
);

export default HeaderBlog;

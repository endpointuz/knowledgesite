import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { HorizontalNavbar } from './ep-components';
import HeaderPhone from './HeaderPhone';
import logo from '../assets/img/logo.png';

const HeaderMenu = () => (
  <div className="header-navbar">
    <Container fluid={true}>
      <Row className="align-items-center justify-content-between">
        <Col xl={2}>
          <div className="logo">
            <Link to="/"><img src={logo} title="Logo"/></Link>
          </div>
        </Col>
        <Col xl={6}>
          <nav className="header-navbar-nav">
            <HorizontalNavbar spaceBetween={51}>
              <Link to="/" className="elink elink-menu">О проекте</Link>
              <Link to="/courses" className="elink elink-menu">Курсы</Link>
              <Link to="/blog" className="elink elink-menu">Блог</Link>
            </HorizontalNavbar>
          </nav>
        </Col>
        <Col xl={3}>
          <HeaderPhone
            number="+998 97 754-32-10"
            label="По всем вопросам"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default HeaderMenu;

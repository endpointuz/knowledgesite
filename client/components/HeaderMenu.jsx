import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HorizontalNavbar } from './ep-components';
import HeaderPhone from './HeaderPhone';
import logo from '../assets/img/logo.png';

const Bars = ({ visible }) => (
  <div id="nav-icon3" className={visible ? 'open' : null}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

const HeaderMenu = () => {
  const [visibleMenu, toggleMenuVisibility] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleMenuVisibility(!visibleMenu);
  };

  return (
    <div className="header-navbar">
      <Container fluid={true}>
        <Row className="align-items-center justify-content-xl-between justify-content-between">
          <Col xs={8} xl={2}>
            <div className="logo" style={{ zIndex: 100, position: 'relative' }}>
              <Link to="/"><img src={logo} title="Logo" className="logo-image"/></Link>
            </div>
          </Col>
          <Col xs={3} xl={6}>
            <button type="button" className="header-navbar-toggler" onClick={handleToggle}>
              {/*{visibleMenu ? <FontAwesomeIcon icon="times" /> : <FontAwesomeIcon icon="bars" />}*/}
              <Bars visible={visibleMenu} />
            </button>
            <nav className={`header-navbar-nav ${visibleMenu ? 'visible' : null}`}>
              <HorizontalNavbar>
                <Link to="/" className="elink elink-menu">О проекте</Link>
                <Link to="/courses" className="elink elink-menu">Курсы</Link>
                <Link to="/blog" className="elink elink-menu">Блог</Link>
              </HorizontalNavbar>
            </nav>
          </Col>
          <Col xs={12} xl={3}>
            <HeaderPhone
              number="+998 97 754-32-10"
              label="По всем вопросам"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderMenu;

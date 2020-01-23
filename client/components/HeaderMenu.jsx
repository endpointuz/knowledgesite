import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
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
  const [pageY, setPageY] = useState(null);
  const [scrollMenuVisible, setScrollMenuVisibility] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleMenuVisibility(!visibleMenu);
  };

  const handleScroll = () => {
    const prevScrollpos = pageY;
    const currentScrollPos = window.pageYOffset;
    const visible = (prevScrollpos > currentScrollPos) || (currentScrollPos < 100);
    setPageY(currentScrollPos);
    setScrollMenuVisibility(visible);
  };

  useEffect(() => {
    setPageY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const menuOnTop = pageY === 0;

  return (
    <div className="header-navbar">
      <Container fluid={true}>
        <Row className="align-items-center justify-content-xl-between justify-content-between">
          <Col xs={12}>
            <div className={`fixed-navbar ${menuOnTop ? 'bgc-t' : ''} ${!scrollMenuVisible ? 'fixed-invisible' : 'fixed-visible'}`}>
              <div className="header-navbar">
                <Container fluid={true}>
                  <Row className="align-items-center justify-content-xl-between justify-content-between">
                    <Col xs={8} lg={4} xl={3}>
                      <div className="logo" style={{ zIndex: 100, position: 'relative' }}>
                        <Link to="/"><img src={logo} title="Logo" className="logo-image"/></Link>
                      </div>
                    </Col>
                    <Col xs={3} lg={8} xl={5}>
                      <button type="button" className="header-navbar-toggler" onClick={handleToggle}>
                        <Bars visible={visibleMenu} />
                      </button>
                      <nav className={`header-navbar-nav ${visibleMenu ? 'visible' : null}`}>
                        <HorizontalNavbar>
                          <Link to="/about" className="elink elink-menu">О проекте</Link>
                          <Link to="/courses" className="elink elink-menu">Курсы</Link>
                          <Link to="/contacts" className="elink elink-menu">Контакты</Link>
                          <Link to="/blog" className="elink elink-menu">Блог <sup style={{ fontSize: '8px' }}>beta</sup></Link>
                        </HorizontalNavbar>
                      </nav>
                    </Col>
                    <Col xs={12} xl={4}>
                      <HeaderPhone
                        number="+998 90 353-00-48"
                        label="По всем вопросам"
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default HeaderMenu;

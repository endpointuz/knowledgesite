import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { HeaderTitle, Modal } from './ep-components';

const HeaderAboutMain = () => (
  <div className="header-about-main">
    <Container className="h-100" style={{ padding: 0 }}>
      <Row className="h-100" noGutters={true}>
        <Col xl={8} style={{ padding: 0 }}>
          <div className="header-main-slogan" style={{ padding: 0 }}>
            <HeaderTitle center={false}>
              О проекте
            </HeaderTitle>
            <p className="esubtitle" style={{ textAlign: 'left' }}>
              Учебный центр knowledge - курсы от профессиональной команды разработчиков
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HeaderAboutMain;

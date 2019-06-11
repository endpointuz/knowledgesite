import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { HeaderTitle, Modal } from './ep-components';

const AppointmentMain = () => (
  <div className="appointment-main">
    <Container className="h-100" className="p-0">
      <Row className="align-items-center justify-content-center h-100" noGutters={true}>
        <Col lg={8} xl={8}>
          <div className="header-main-slogan">
            <HeaderTitle
              center={true}
              titleType="h2"
            >
              Пора начинать инвестировать в себя
            </HeaderTitle>
            <p className="esubtitle">
              <span className="d-block">Записывайся на консультацию и узнаешь,</span>
              как с нуля освоить профессию и какие языки
              программирования изучить.
            </p>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Modal
                buttonType="primary-inverse"
                buttonText="Записаться сейчас"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AppointmentMain;

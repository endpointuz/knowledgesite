import React from 'react';
import moment from 'moment';

import { Container, Row, Col } from 'react-bootstrap';
import { Modal } from './ep-components';

moment.locale('ru');

const CourseStart = ({
  startDate,
  price,
}) => (
  <div className="start-course">
    <Container className="h-100 p-0">
      <Row className="align-items-center justify-content-center h-100" noGutters={true}>
        <Col lg={8} xl={8}>
          <div className="header-main-slogan">
            <p className="start-course-title">
              <span className="d-block">Дата старта <span className="important">{moment(startDate).format('Do MMMM')}</span></span>
              <span className="d-block">Стоимость за весь курс <span className="important">{price}</span> сумов</span>
            </p>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Modal
                buttonType="primary"
                buttonText="Записаться сейчас"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CourseStart;

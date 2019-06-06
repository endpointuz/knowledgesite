import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderTitle } from './ep-components';

import shash from '../assets/img/shash.jpg';

const TeacherOneCourseMain = () => {

  return (
    <Container className="p-0">
      <Row noGutters={true} className="align-items-center">
        <Col xl={12} className="teacher-header">
          <HeaderTitle titleType="h2">
            Преподаватель
          </HeaderTitle>
        </Col>
        <Col xl={6}>
          <div className="teacher-description">
            <h3 className="teacher-description-title">Шашлындос Шашлындосов</h3>
            <p className="teacher-description-subtitle">Сооснователь, генеральный директор ENDPOINT</p>
            <p className="teacher-description-text">
              В Front-end разработке около 3 лет.
              За это время успел поработать как над обычными лендингами и разработкой магазинов,
              так и на более редких задачах, таких как электронные мобильные кошельки и
              банковские системы.
            </p>
            <p className="teacher-description-text">
              Сооснователь cтудии ENDPOINT. Среди клиентов которых: МВД РУз, UZBAT
            </p>
          </div>
        </Col>
        <Col xl={6}>
          <img src={shash} alt="" style={{ width: '90%' }}/>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherOneCourseMain;

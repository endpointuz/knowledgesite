import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderTitle, TeacherCard } from './ep-components';

import igorPic from '../assets/img/igor.jpg';

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
          <TeacherCard
            img={igorPic}
            title="Игорь Ким"
            description="Сооснователь и генеральный директор ENDPOINT"
          />
        </Col>
        <Col xl={6}>
          <div className="teacher-description">
            <p className="teacher-description-text">
              В Front-end разработке около 5 лет.
              За это время успел поработать как над обычными лендингами и разработкой магазинов,
              так и на более редких задачах. Работал над высоконагруженными веб-проектами в крупных
              компаниях США и Европы.
            </p>
            <p className="teacher-description-text">
              Сооснователь cтудии ENDPOINT. Среди клиентов которых: МВД РУз, UZBAT
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherOneCourseMain;

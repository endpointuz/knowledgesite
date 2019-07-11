import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderTitle, TeacherCard } from './ep-components';

const TeacherOneCourseMain = ({ teacher }) => {

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
            img={teacher.photo}
            title={teacher.name}
            description={teacher.position}
          />
        </Col>
        <Col xl={6}>
          <div className="teacher-description">
            {teacher.description.map((text, index) => (
              <p className="teacher-description-text" key={index}>
                {text}
              </p>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherOneCourseMain;

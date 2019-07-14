import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderTitle, TeacherCard } from './ep-components';

const TeacherOneCourseMain = ({ teachers = [] }) => {

  return (
    <Container className="p-0">
      {teachers.map(teacher => (
        <Row noGutters={true} className="align-items-center" key={teacher.id}>
          <Col xl={12} className="teacher-header">
            <HeaderTitle titleType="h2">
              Преподаватель
            </HeaderTitle>
          </Col>
          <Col xl={6}>
            <TeacherCard
              img={teacher.photo}
              title={teacher.name}
              description={teacher.description}
            />
          </Col>
          <Col xl={6}>
            <div className="teacher-description">
              {teacher.position.split('/br/').map((text, index) => (
                <p className="teacher-description-text" key={index}>
                  {text}
                </p>
              ))}
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default TeacherOneCourseMain;

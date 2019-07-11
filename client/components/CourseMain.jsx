import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderTitle from './ep-components/HeaderTitle';
import CourseCard from './CourseCard';

import { courses } from '../content';

const CourseMain = (
  { filter = () => true, showLinkToAllCourses = false },
) => (
  <Container className="p-0">
    <Row style={{ marginBottom: 30 }}>
      <Col xl={12}>
        <HeaderTitle
          titleType="h2"
        >
          Начни карьеру в IT
        </HeaderTitle>
      </Col>
    </Row>
    <Row noGutters={true}>
      {courses.filter(filter).map(course => (
        <Col xl={12} style={{ marginBottom: 30 }} className="p-3 p-xl-0" key={course.id}>
          <CourseCard
            img={course.img}
            title={course.title}
            description={course.description}
            totalLessons={course.totalLessons}
            period={course.period}
            startAt={course.startAt}
            link={course.link}
          />
        </Col>
      ))}
    </Row>
    {
      showLinkToAllCourses
        ? (
          <Row>
            <Col xl={12}>
              <div style={{ textAlign: 'center', marginTop: 51 }}>
                <a href="/courses" className="more" style={{ margin: '0 auto' }}>
                  Посмотреть все курсы
                </a>
              </div>
            </Col>
          </Row>
        )
        : null
    }
  </Container>
);

export default CourseMain;

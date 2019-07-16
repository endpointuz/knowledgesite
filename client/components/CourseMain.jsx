import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { take } from 'lodash';
import moment from 'moment';
import HeaderTitle from './ep-components/HeaderTitle';
import CourseCard from './CourseCard';

import { courses } from '../content';

moment.locale('ru');

const CourseMain = (
  { coursesData, showLinkToAllCourses = false, courseCount = 30 },
) => {

  return (
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
        {take(coursesData.results, courseCount).map(course => (
          <Col xl={12} style={{ marginBottom: 30 }} className="p-3 p-xl-0" key={course.id}>
            <CourseCard
              img={course.picture}
              title={course.name}
              description={course.description}
              totalLessons={course.duration}
              period={course.period}
              startAt={moment(course.started_at).format('MMMM')}
              link={`/courses/${course.slug}`}
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
};

export default CourseMain;

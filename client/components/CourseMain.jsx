import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderTitle from './ep-components/HeaderTitle';
import CourseCard from './CourseCard';
import girlPic from '../assets/img/girl.png';
import manPic from '../assets/img/manPic.png';
import { Button } from './ep-components';

const CourseMain = () => (
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
      <Col xl={12} style={{ paddingBottom: 30 }} className="p-3 p-xl-0">
        <CourseCard
          img={girlPic}
          title="Введение в программирование"
          description="Этот курс рассчитан на новичков без опыта в программировании. На протяжении десятков уроков вы познакомитесь с фундаментальными понятиями и концепциями программирования, научитесь писать простые программы, понимать ошибки, которые возникают при запуске и выполнении кода"
          totalLessons="30 занятий"
          period="3 раза в неделю"
          startAt="Июнь"
        />
      </Col>
      <Col xl={12} className="p-3 p-xl-0">
        <CourseCard
          img={manPic}
          title="Frontend. ReactJS"
          description="В этом курсе мы затронем все аспекты его работы и шаг за шагом, начиная с простых компонентов, дойдем до взаимодействия с бекендом и интеграции с кодом, написанном без его использования(на jquery)."
          totalLessons="40 занятий"
          period="3 раза в неделю"
          startAt="Июнь"
        />
      </Col>
    </Row>
    <Row>
      <Col xl={12}>
        <div style={{ textAlign: 'center', marginTop: 51 }}>
          <a href="/" className="more" style={{ margin: '0 auto' }}>
            Посмотреть все курсы
          </a>
        </div>
      </Col>
    </Row>
  </Container>
);

export default CourseMain;

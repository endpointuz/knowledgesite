import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTitle from './ep-components/HeaderTitle';

import aboutUsPic from '../assets/img/about-us.png';

const AboutUsMain = () => (
  <div className="about-us">
    <Container>
      <Row className="align-items-center">
        <Col xl={6} style={{ padding: 0 }}>
          <div className="about-us-text">
            <HeaderTitle
              titleType="h2"
            >
              Мы
            </HeaderTitle>
            <p className="esubtitle" style={{ textAlign: 'left' }}>
              Команда профессиональных разработчиков, за плечами множество
              сложных проектов. За годы мы набрали большой опыт, которым хотим поделиться.
              Наша программа обучения ориентированна на практический результат, а задачи
              и теории построенны только по мотивам реальных проектов и задач. От других курсов
              нас отличает подход к образованию и созидательный характер.
              Мы поставили себе амбициозную цель - планомерно поднять IT образование в Нашей Стране.
            </p>
          </div>
        </Col>
        <Col xl={6}>
          <div className="about-us-image">
            <img src={aboutUsPic} alt="картинка о нас" className="w-100" />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutUsMain;

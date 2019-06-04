import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import profitPic from '../assets/img/profit-small.png';
import HeaderTitle from './ep-components/HeaderTitle';

const ProfitMain = () => (
  <Container className="p-0">
    <Row noGutters={true} className="align-items-center justify-content-lg-between">
      <Col lg={5} xl={6}>
        <img src={profitPic} alt="" className="profit-image" />
      </Col>
      <Col lg={6} xl={5}>
        <HeaderTitle titleType="h2" style={{ marginBottom: 40 }}>
          Что ты получишь
        </HeaderTitle>
        <div className="profit-description">
          <HeaderTitle titleType="h4" level="4" style={{ marginBottom: 5 }}>
            Мгновенный отзыв
          </HeaderTitle>
          <p className="profit-text">
            Твой код проверяется, как только ты отправишь его.
            Мы проводим регулярные тестирования и экзаменации
          </p>
        </div>
        <div className="profit-description">
          <HeaderTitle titleType="h4" level="4" style={{ marginBottom: 5 }}>
            Обучение на практике
          </HeaderTitle>
          <p className="profit-text">
            Применяй свое обучение в настоящих проектах
            Погрузим тебя в реальную среду разработки
          </p>
        </div>
        <div className="profit-description">
          <HeaderTitle titleType="h4" level="4" style={{ marginBottom: 5 }}>
            Найди работу своей мечты
          </HeaderTitle>
          <p className="profit-text">
            Мы готовим к полноценному трудоустройству в IT.
            Навыкам коммуникации, помогаем подготовиться к собеседованиям
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default ProfitMain;

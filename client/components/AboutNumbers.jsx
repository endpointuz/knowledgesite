import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutNumbers = () => (
  <div className="about-numbers">
    <Container>
      <Row className="justify-content-center">
        <Col xl={10}>
          <p className="about-numbers-text">
            Мы обучаем самым востребованным на сегодняшний день IT-специальностям.
            Занятия в Knowledge — 30% теории, 70% практики и 99% удовольствия.
            И как результат — ваше трудоустройство!
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutNumbers;

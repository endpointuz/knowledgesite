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
              Учебный центр knowledge Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
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

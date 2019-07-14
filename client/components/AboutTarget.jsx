import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutTargetImage from '../assets/img/Artwork.svg';
import HeaderTitle from './ep-components/HeaderTitle';

const AboutTarget = () => (
  <div className="about-target">
    <Container style={{ padding: 0 }}>
      <Row noGutters={true}>
        <Col xl={6} style={{ padding: 0 }}>
          <div className="about-target-image">
            <img src={aboutTargetImage} alt="" className="w-100" />
          </div>
        </Col>
        <Col xl={6}>
          <div className="about-target-text">
            <HeaderTitle
              titleType="h2"
            >
              Мы
            </HeaderTitle>
            <p className="esubtitle" style={{ textAlign: 'left' }}>
              Популяризация IT-сферы, повышение стандартов обучения, подготовка
              специалистов для узбекских
              и международных IT-компаний. А также помощь начинающим IT-специалистам
              в поиске первого рабочего места в индустрии.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutTarget;

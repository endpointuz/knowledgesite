import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { HeaderTitle, Button } from './ep-components';
import girlBig from '../assets/img/girl-big.png';
import start from '../assets/img/start.svg';
import calendar from '../assets/img/calendar.svg';
import timeIcon from '../assets/img/time.svg';
import cashIcon from '../assets/img/cash.svg';

const HeaderOneCourseMain = ({ startAt, totalLessons, period, price }) => (
  <div className="header-main-course">
    <Container className="p-0">
      <Row noGutters={true} className="marginBottom">
        <Col xl={8}>
          <div className="header-main-slogan p-0">
            <HeaderTitle center={false} titleType="h2" level="2" style={{ marginBottom: 15 }}>
              Курс
            </HeaderTitle>
            <HeaderTitle center={false} titleType="h2">
              Введение в программирование
            </HeaderTitle>
            <p className="esubtitle text-left">
              Этот курс рассчитан на новичков без опыта в программировании.
              На протяжении десятков уроков вы познакомитесь с фундаментальнымипонятиями
              и концепциями программирования
            </p>
            <div className="header-main-course-btn" style={{ marginTop: 24 }}>
              <Button type="primary" style={{ margin: '0 auto' }}>
                Записаться сейчас
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={12} xl={4}>
          <img src={girlBig} alt="" className="header-main-course-image" />
        </Col>
      </Row>
      <Row noGutters={true}>
        <Col md={6} lg={3} xl={3}>
          <div className="course-card-stat">
            <Container className="p-0">
              <Row noGutters={true}>
                <Col xs="auto" xl="12" className="mb-2 mr-2">
                  <img src={timeIcon}/>
                </Col>
                <Col xs="auto" xl="12">
                  <p className="data">{totalLessons}</p>
                  <p className="title">длительность</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
        <Col md={6} lg={3} xl={3}>
          <div className="course-card-stat">
            <Container className="p-0">
              <Row noGutters={true}>
                <Col xs="auto" xl="12" className="mb-2 mr-2">
                  <img src={calendar}/>
                </Col>
                <Col xs="auto" xl="12">
                  <p className="data">{period}</p>
                  <p className="title">периодичность</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
        <Col md={6} lg={3} xl={3}>
          <div className="course-card-stat">
            <Container className="p-0">
              <Row noGutters={true}>
                <Col xs="auto" xl="12" className="mb-2 mr-2">
                  <img src={start} />
                </Col>
                <Col xs="auto" xl="12">
                  <p className="data">{startAt}</p>
                  <p className="title">старт</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
        <Col md={6} lg={3} xl={3}>
          <div className="course-card-stat">
            <Container className="p-0">
              <Row noGutters={true}>
                <Col xs="auto" xl="12" className="mb-2 mr-2">
                  <img src={cashIcon} />
                </Col>
                <Col xs="auto" xl="12">
                  <p className="data">{price}</p>
                  <p className="title">стоимость</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HeaderOneCourseMain;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import timeIcon from '../assets/img/time.svg';
import calendar from '../assets/img/calendar.svg';
import start from '../assets/img/start.svg';
import rarr from '../assets/img/rarr.svg';
import share from '../assets/img/share.svg';

const CourseCard = ({
  img,
  title,
  description,
  totalLessons,
  period,
  startAt,
  link,
}) => (
  <div className="course-card">
    <a href="/" className="share-button">
      <img src={share} alt="" />
    </a>
    <Container className="p-0">
      <Row className="align-items-center flex-nowrap" noGutters={true}>
        <Col xs={0} xl="auto" className="text-center d-none d-sm-block" style={{ width: '23%' }}>
          <img src={img} />
        </Col>
        <Col xs={12} xl="auto" className="border-left" style={{ width: '77%' }}>
          <div className="course-card-info">
            <h3 className="course-card-title">{title}</h3>
            <p className="course-card-description">{description}</p>
            <div className="course-card-stat">
              <Container className="p-0">
                <Row noGutters={true}>
                  <Col xl="auto">
                    <div className="course-card-stat-duration">
                      <Container className="p-0">
                        <Row noGutters={true}>
                          <Col xs="auto" xl="auto" className="mr-10px">
                            <img src={timeIcon}/>
                          </Col>
                          <Col xs="auto" xl="auto">
                            <p className="data">{totalLessons}</p>
                            <p className="title">длительность</p>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                  <Col xl="auto">
                    <div className="course-card-stat-period">
                      <Container className="p-0">
                        <Row noGutters={true}>
                          <Col xs="auto" xl="auto" className="mx-10px">
                            <img src={calendar} />
                          </Col>
                          <Col xs="auto" xl="auto">
                            <p className="data">{period}</p>
                            <p className="title">периодичность</p>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                  <Col xl="auto">
                    <div className="course-card-stat-start">
                      <Container className="p-0">
                        <Row noGutters={true}>
                          <Col xs="auto" xl="auto" className="mx-10px">
                            <img src={start} />
                          </Col>
                          <Col xs="auto" xl="auto">
                            <p className="data">{startAt}</p>
                            <p className="title">старт</p>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                  <Col xl="auto" className="align-self-end ml-auto">
                    <div className="course-card-stat-more">
                      <Container className="p-0">
                        <Row noGutters={true}>
                          <Col xl="auto" className="mx-10px">
                            <a href={link || '/'} className="more">Подробнее <img src={rarr} alt=""/></a>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CourseCard;

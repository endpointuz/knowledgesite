import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import ShareButton from '../components/ep-components/ShareButton';

import timeIcon from '../assets/img/time.svg';
import calendar from '../assets/img/calendar.svg';
import start from '../assets/img/start.svg';
import rarr from '../assets/img/rarr.svg';


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
    <ShareButton
      shareTo={link}
    />
    <Container className="p-0">
      <Row className="align-items-center flex-nowrap" noGutters={true}>
        <Col xs={0} lg="auto" xl="auto" className="text-center d-none d-lg-block" style={{ width: '23%' }}>
          <img src={img} className="course-card-image w-100" />
        </Col>
        <Col xs={12} lg="auto" xl="auto" className="border-left" style={{ width: '77%' }}>
          <div className="course-card-info">
            <h3 className="course-card-title">{title}</h3>
            <p className="course-card-description">{description}</p>
            <div className="course-card-stat">
              <Container className="p-0">
                <Row noGutters={true}>
                  <Col md={4} xl="auto">
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
                  <Col md={5} xl="auto">
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
                  <Col md={3} xl="auto">
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
                  <Col md={12} xl="auto" className="align-self-end ml-auto p-md-2 p-xl-0">
                    <div className="course-card-stat-more">
                      <Container className="p-0">
                        <Row noGutters={true}>
                          <Col xl="auto" className="mx-10px">
                            <Link to={link || '/'} className="more">Подробнее <img src={rarr} alt=""/></Link>
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

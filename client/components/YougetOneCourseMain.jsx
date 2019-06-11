import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderTitle, Profit } from './ep-components';

const YougetOneCourseMain = () => {

  return (
    <Container className="p-0">
      <Row noGutters={true}>
        <Col xl={8} style={{ marginBottom: 45 }}>
          <HeaderTitle titleType="h2" center={false}>
            Что ты получишь
          </HeaderTitle>
        </Col>
      </Row>
      <Row noGutters={true}>
        <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
          <Profit
            title="Портфолио"
            description="На курсе вы создадите рабочие проекты, которые загрузите на собственный репозиторий Github"
          />
        </Col>
        <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
          <Profit
            title="Сертификат об окончании"
            description="На курсе вы создадите рабочие проекты, которые загрузите на собственный репозиторий Github"
          />
        </Col>
        <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
          <Profit
            title="Помощь в трудоустройстве"
            description="На курсе вы создадите рабочие проекты, которые загрузите на собственный репозиторий Github"
          />
        </Col>
        <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
          <Profit
            title="Стажировка в ИТ-компаниях"
            description="На курсе вы создадите рабочие проекты, которые загрузите на собственный репозиторий Github"
          />
        </Col>
        <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
          <Profit
            title="Скидка -10%"
            description="На курсе вы создадите рабочие проекты, которые загрузите на собственный репозиторий Github"
          />
        </Col>
        <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
          <Profit
            title="Практические задания"
            description="На курсе вы создадите рабочие проекты, которые загрузите на собственный репозиторий Github"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default YougetOneCourseMain;

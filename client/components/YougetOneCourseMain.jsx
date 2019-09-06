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
            description="Вы получаете сертификат от digital-агенства Endpoint, как знак того, что Вы обучались у практикующих специалистов"
          />
        </Col>
        <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
          <Profit
            title="Помощь в трудоустройстве"
            description="Мы рассылаем резюме лучших учеников нашим партнерам или предалагем вакансию у нас"
          />
        </Col>
        <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
          <Profit
            title="Стажировка в ИТ-компаниях"
            description="Во время обучения на наших курсах мы можем предложить бесплатную стажировку у нас или у наших партнеров"
          />
        </Col>
        <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
          <Profit
            title="Практические задания"
            description="Задания, которые Вы будете выполнять в процессе обучения, взяты из реальных проектов"
          />
        </Col>
        <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
          <Profit
            title="Готовая профессия"
            description="Вы сможете получить желаемую работу и окупить обучение в первый месяц"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default YougetOneCourseMain;

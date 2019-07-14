import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderTitle, Profit } from './ep-components';

const AboutAdvantages = () => {

  return (
    <div style={{ marginTop: 30, marginBottom: 30 }}>
      <Container className="p-0">
        <Row noGutters={true}>
          <Col xl={8} style={{ marginBottom: 45 }}>
            <HeaderTitle titleType="h2" center={false}>
              Преимущества
            </HeaderTitle>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
            <Profit
              title="Проектное обучение"
              description="В процессе обучения студенты разрабатывают свой уникальный проект. Это позволяет получать важные практические навыки."
            />
          </Col>
          <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
            <Profit
              title="Современные программы"
              description="Актуальная и современная программы — это концентрат знаний и практики, приправленный интересными проектами и геймификацией."
            />
          </Col>
          <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
            <Profit
              title="Помощь в трудоустройстве"
              description="Лучшим студентам даем рекомендации в ведущие ИТ-компании. Поможем подготовиться к собеседованию, составить резюме, оформить портфолио."
            />
          </Col>
          <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
            <Profit
              title="Удобные формы обучения"
              description="Годовые школы. Интенсивы. Вебинары. TeensCool для подростков. Возможность индивидуального обучения. Онлайн занятия."
            />
          </Col>
          <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
            <Profit
              title="Маленькие группы"
              description="Количество человек в группе 8-12 человек. Нам важно качество обучающего процесса."
            />
          </Col>
          <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
            <Profit
              title="Поддержка после курсов"
              description="Мы не оставляем наших студентов, а постоянно оказываем им помощь в дальнейшем развитии."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutAdvantages;

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
              description="На каждом курсе слушатель разрабатывает проект, который, в конечном итоге, попадает в портфолио на GitHub"
            />
          </Col>
          <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
            <Profit
              title="Современные программы"
              description="Наша программа все время меняется исходя из развития тех или иных технологий. Поэтому мы всегда остаемся актуальными"
            />
          </Col>
          <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
            <Profit
              title="Помощь в трудоустройстве"
              description="Лучшим студентам мы даем рекоммендации в IT-компании наших партнеров или в нашу команду ENDPOINT"
            />
          </Col>
          <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
            <Profit
              title="Удобные формы обучения"
              description="Мы подготовили удобный график - утром, вечером или в выходные дни. Также разработали программу для групп с упором на практику"
            />
          </Col>
          <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
            <Profit
              title="Маленькие группы"
              description="Максимальное количество в группах - 12. Это самое оптимальное количество для разбиения слушателей на команды во время обучения"
            />
          </Col>
          <Col md={6} lg={4} xl={4} style={{ marginBottom: 50 }}>
            <Profit
              title="Поддержка после курсов"
              description="Всем студентам без исключения, наставник оказывает посильную помощь и после курсов. Также формируем сообщество слушателей, где Вы можете делиться информацией, спрашивать или просто болтать"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutAdvantages;

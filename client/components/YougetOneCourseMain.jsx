import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HeaderTitle } from './ep-components';

const YougetOneCourseMain = () => {

  return (
    <Container className="p-0">
      <Row noGutters={true} className="justify-content-center">
        <Col xl={8} style={{ marginBottom: 45 }}>
          <HeaderTitle titleType="h2" center={true}>
            Чему ты научишься
          </HeaderTitle>
        </Col>
        <Col xl={12} style={{ marginBottom: 69 }}>
          <p className="youget-text">
            Для тех, кто хочет стать разработчиком <br />
            Вы изучите основы, которые необходимы программисту, <br />
            сориентируетесь в специальностях и сможете принять взвешенное <br />
            решение, куда двигаться дальше: в веб, мобильную разработку или, <br />
            например, разработку игр
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default YougetOneCourseMain;

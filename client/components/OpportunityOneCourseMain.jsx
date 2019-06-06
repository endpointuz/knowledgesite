import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import oppGuy from '../assets/img/opp-guy.png';

const OpportunityOneCourseMain = () => (
  <Container className="p-0">
    <Row noGutters={true} className="align-items-center">
      <Col xl={6}>
        <div className="opportunity-text">
          <h3 className="etitle etitle-5" style={{ width: '80%' }}>
            Заинтересован в изучении программирования, <br /> но не знаешь, с чего начать?
          </h3>
          <p className="opportunity-description">
            Этот курс именно для тебя! Ты изучишь основы, которые необходимы программисту,
            сориентируетесь в специальностях и сможете принять взвешенное решение,
            куда двигаться дальше: в веб, мобильную разработку или, например, разработку игр
          </p>
        </div>
      </Col>
      <Col xl={6}>
        <img src={oppGuy} alt="" className="opportunity-image" />
      </Col>
    </Row>
  </Container>
);

export default OpportunityOneCourseMain;

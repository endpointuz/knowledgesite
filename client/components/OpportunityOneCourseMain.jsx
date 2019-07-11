import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const OpportunityOneCourseMain = ({ opportunity }) => (
  <Container className="p-0">
    <Row noGutters={true} className="align-items-center">
      <Col xl={6}>
        <div className="opportunity-text">
          <h3 className="etitle etitle-5" style={{ width: '80%' }}>
            {opportunity.title}
          </h3>
          <p className="opportunity-description">
            {opportunity.description}
          </p>
        </div>
      </Col>
      <Col xl={6}>
        <img src={opportunity.image} alt="" className="opportunity-image" />
      </Col>
    </Row>
  </Container>
);

export default OpportunityOneCourseMain;

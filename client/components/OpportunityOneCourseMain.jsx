import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const OpportunityOneCourseMain = ({ opportunity = [] }) => (
  <Container className="p-0">
    {opportunity.map(textBlock => (
      <Row noGutters={true} className="align-items-center" key={textBlock.id}>
        <Col xl={6} style={{ paddingRight: 20 }}>
          <div className="opportunity-text">
            <h3 className="etitle etitle-5" style={{ width: '80%' }}>
              {textBlock.name}
            </h3>
            <p className="opportunity-description">
              {textBlock.text_block}
            </p>
          </div>
        </Col>
        <Col xl={6} style={{ paddingLeft: 20 }}>
          <img src={textBlock.picture} alt="" className="opportunity-image" />
        </Col>
      </Row>
    ))}
  </Container>
);

export default OpportunityOneCourseMain;

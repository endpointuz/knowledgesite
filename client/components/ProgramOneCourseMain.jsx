import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderTitle from './ep-components/HeaderTitle';
import Accordion from './ep-components/Accordion';

const ProgramOneCourseMain = ({ courseProgram }) => (
  <Container className="p-0">
    <Row noGutters={true} className="align-items-center">
      <Col xl={12} style={{ marginBottom: 45 }}>
        <HeaderTitle titleType="h2">
          Программа курса
        </HeaderTitle>
      </Col>
      <Col xl={12}>
        <div className="program-wrapper">
          <Accordion
            blocks={courseProgram}
          />
        </div>
      </Col>
    </Row>
  </Container>
);

export default ProgramOneCourseMain;

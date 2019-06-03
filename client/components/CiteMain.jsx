import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import HeaderTitle from './ep-components/HeaderTitle';

const CiteMain = () => (
  <Container className="p-0">
    <Row noGutters={true}>
      <Col xl={12}>
        <div className="cite-wrapper">
          <div className="cite-wrapper-text">
            <HeaderTitle
              level="3"
              titleType="h3"
              style={{ lineHeight: '45px', width: '80%' }}
            >
              Курсы от профессиональнойкоманды разработчиков
            </HeaderTitle>
            <p className="cite-text">
              Мы помогаем людям получить IT образование,
              чтобы они смогли найти работу мечтыи реализовать
              свои жизненные цели.
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default CiteMain;

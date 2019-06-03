import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { HeaderTitle, Button } from './ep-components';

const HeaderMain = () => (
  <div className="header-main">
    <Container className="h-100">
      <Row className="align-items-center justify-content-center h-100">
        <Col xl={8}>
          <div className="header-main-slogan">
            <HeaderTitle center={true}>
              Развивай свои навыки. Начни карьеру в IT
            </HeaderTitle>
            <p className="esubtitle">
              Изучай программирование и другие востребованные направления.
              Лучшие теории и практики построенные на авторских методиках от ведущих специалистов
            </p>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Button type="primary" style={{ margin: '0 auto' }}>
                Записаться сейчас
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HeaderMain;

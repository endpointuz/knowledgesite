import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { YMaps, Placemark, Map } from 'react-yandex-maps';
import { HeaderTitle, ContactCard } from './ep-components';

const mapState = {
  center: [41.327724, 69.302760],
  zoom: 15,
};

const ContactsMain = ({
  className = '',
}) => (
  <Container className="p-0">
    <Row noGutters={true}>
      <Col xs={12}>
        <HeaderTitle titleType="h2" style={{ marginBottom: 40 }}>
          Контактная информация
        </HeaderTitle>
      </Col>
    </Row>
    <Row noGutters={true} style={{ marginBottom: 70 }}>
      <Col md={6} lg={6} xl={3}>
        <ContactCard renderIcon={() => (<FontAwesomeIcon icon="home" />)} >
          <p className="contact-card-item">
            г. Ташкент, Мирзо-Улугбекский р-н, ул. Аккурган 1 пр-д, д. 60
          </p>
        </ContactCard>
      </Col>
      <Col md={6} lg={6} xl={3}>
        <ContactCard renderIcon={() => (<FontAwesomeIcon icon="history" />)} >
          <p className="contact-card-item">
            Пн. – Пт. с 10:00 до 21:00
          </p>
          <p className="contact-card-item">
            Сб. с 10:00 до 19:00
          </p>
          <p className="contact-card-item">
            Вс. выходной
          </p>
        </ContactCard>
      </Col>
      <Col md={6} lg={6} xl={3}>
        <ContactCard renderIcon={() => (<FontAwesomeIcon icon="phone" />)} >
          <p className="contact-card-item">
            +998 90 353–00–48
          </p>
          <p className="contact-card-item">
            +998 97 744–67–09
          </p>
          <p className="contact-card-item">
            +998 97 754–32–10
          </p>
        </ContactCard>
      </Col>
      <Col md={6} lg={6} xl={3}>
        <ContactCard renderIcon={() => (<FontAwesomeIcon icon="envelope" />)} >
          <p className="contact-card-item">
            info@knowledge.uz
          </p>
        </ContactCard>
      </Col>
    </Row>
    <Row noGutters={true} style={{ marginBottom: 100 }}>
      <Col xl={12}>
        <YMaps>
          <Map
            defaultState={mapState}
            instanceRef={(ref) => {
              if (ref) {
                ref.behaviors.disable('scrollZoom');
                ref.behaviors.disable('drag');
              }
            }}
            className="map"
          >
            <Placemark geometry={mapState.center} />
          </Map>
        </YMaps>
      </Col>
    </Row>
  </Container>
);

export default ContactsMain;

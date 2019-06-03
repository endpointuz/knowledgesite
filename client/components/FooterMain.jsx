import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import smallLogo from '../assets/img/small_logo.png';
import smallFooterLogo from '../assets/img/small-footer-logo.png';

const CompanyDetails = () => (
  <div className="footer-details">
    <a href="/"><img src={smallLogo} alt=""/></a>
    <p className="footer-addr">г. Ташкент, Мирзо-Улугбекскийр-н, ул. Аккурган 1 пр-д, д. 60</p>
    <p className="footer-email"><a href="mailto:knowledge@endpoint.uz" className="footer-email-link">knowledge@endpoint.uz</a></p>
  </div>
);

const CompanySocials = () => (
  <div className="footer-socials">
    <p className="footer-number">
      <a href="tel:+998977543210" className="footer-number-link">+998 97 754-32-10</a>
      <span className="footer-socials-title">По всем вопросам</span>
    </p>
    <div className="footer-socials-container">
      <div className="footer-socials-buttons">
        <a href="/" className="ep-btn-social" style={{ marginRight: 20 }}>
          <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
        </a>
        <a href="/" className="ep-btn-social" style={{ marginRight: 20 }}>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
        <a href="/" className="ep-btn-social">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </a>
      </div>
      <p className="footer-socials-title" style={{ marginTop: 5 }}>Следите за нами в соцсетях</p>
    </div>
  </div>
);

const menuItems = [
  { title: 'О проекте', link: '/', id: 1 },
  { title: 'Отзывы', link: '/', id: 2 },
  { title: 'Помощь', link: '/', id: 3 },
  { title: 'Кусы', link: '/', id: 4 },
  { title: 'Блог', link: '/', id: 5 },
];

const CompanyMenu = () => (
  <div className="footer-menu">
    <ul className="footer-menu-list">
      {menuItems.map(el => (
        <li className="footer-menu-item" key={el.id}>
          <a href={el.link} className="footer-menu-link">{el.title}</a>
        </li>
      ))}
    </ul>
  </div>
)

const FooterMain = () => (
  <Container className="px-0 pt-0">
    <Row noGutters={true} className="justify-content-between bb">
      <Col xl={3}>
        <CompanyDetails />
      </Col>
      <Col xl={3}>
        <CompanySocials />
      </Col>
      <Col xl={4}>
        <CompanyMenu />
      </Col>
    </Row>
    <Row noGutters={true} className="justify-content-between">
      <Col xl={4}>
        <p className="footer-credits">© 2019 OOO «Endpoint»</p>
      </Col>
      <Col xl={4}>
        <p className="footer-label">
          <span className='footer-label-title'>Создан командой</span>
          <a href="/">
            <img src={smallFooterLogo} alt="" />
          </a>
        </p>
      </Col>
    </Row>
  </Container>
);

export default FooterMain;

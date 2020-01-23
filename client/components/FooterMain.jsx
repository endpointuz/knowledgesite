import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import smallLogo from '../assets/img/small_logo.png';
import smallFooterLogo from '../assets/img/small-footer-logo.png';

const CompanyDetails = () => (
  <div className="footer-details text-center text-md-left">
    <a href="/"><img src={smallLogo} alt=""/></a>
    <p className="footer-addr text-left">г. Ташкент, Мирзо-Улугбекский р-н, ул. Аккурган 1 пр-д, д. 60</p>
    <p className="footer-email text-left"><a href="mailto:info@knowledge.uz" className="footer-email-link">info@knowledge.uz</a></p>
  </div>
);

const CompanySocials = () => (
  <div className="footer-socials">
    <p className="footer-number">
      <a href="tel:+998903530048" className="footer-number-link">+998 90 353-00-48</a>
      <span className="footer-socials-title">По всем вопросам</span>
    </p>
    <div className="footer-socials-container">
      <div className="footer-socials-buttons">
        <a href="https://t.me/knowledge_uz" target="_blank" rel="noopener noreferrer" className="ep-btn-social" style={{ marginRight: 20 }}>
          <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
        </a>
        <a href="https://www.instagram.com/knowledge.uz/" target="_blank" rel="noopener noreferrer" className="ep-btn-social" style={{ marginRight: 20 }}>
          <FontAwesomeIcon icon={['fab', 'instagram']} />
        </a>
        <a href="https://www.facebook.com/knowledge.uz/" target="_blank" rel="noopener noreferrer" className="ep-btn-social">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </a>
      </div>
      <p className="footer-socials-title" style={{ marginTop: 5 }}>Следите за нами в соцсетях</p>
    </div>
  </div>
);

const menuItems = [
  { title: 'О проекте', link: '/about', id: 1 },
  { title: 'Курсы', link: '/courses', id: 4 },
  { title: 'Контакты', link: '/contacts', id: 5 },
  { title: 'Блог', link: '/blog', id: 6 },
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
);

const FooterMain = () => (
  <Container className="px-0 pt-0">
    <Row noGutters={true} className="justify-content-between bb">
      <Col md={6} xl={3}>
        <CompanyDetails />
      </Col>
      <Col md={6} xl={3}>
        <CompanySocials />
      </Col>
      <Col xl={4} className="d-none d-xl-block">
        <CompanyMenu />
      </Col>
    </Row>
    <Row noGutters={true} className="justify-content-between">
      <Col sm={6} xl={4}>
        <p className="footer-credits">© 2019 OOO «Endpoint»</p>
      </Col>
      <Col sm={6} xl={4}>
        <p className="footer-label">
          <span className='footer-label-title'>Создан командой</span>
          <a href="https://endpoint.uz" target="_blank" rel="noopener noreferrer">
            <img src={smallFooterLogo} alt="" />
          </a>
        </p>
      </Col>
    </Row>
  </Container>
);

export default FooterMain;

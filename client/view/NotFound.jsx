import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import FooterMain from '../components/FooterMain';
import HeaderMenu from '../components/HeaderMenu';
import ContactsMain from '../components/ContactsMain';

import notFoundPic from '../assets/img/404.png';
import arrowIcon from '../assets/img/arrow.svg';

class NotFound extends React.Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: true });
      document.querySelector('.loader').classList.add('loaded');
      // document.querySelector('.loader-circle').classList.add('loaded');
    }, 1500);
    setTimeout(() => {
      document.querySelector('.loader-circle').classList.add('loaded');
    }, 1000);
  }

  componentWillUnmount() {
    document.querySelector('.loader').classList.remove('loaded');
    document.querySelector('.loader-circle').classList.remove('loaded');
  }

  render() {
    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <Helmet>
          <title>Страница не найдена | Knowledge</title>
          <meta name="description" content="страница не найдена сайта knowledge.uz. Учебные курсы от профессиональной команды разработчиков в Ташкент" />
          <meta name="keywords" content="учебные курсы в Ташкент, программирование, веб-технологии, проекты, учебный центр, создание сайтов" />
        </Helmet>
        <header className="header with-padding" key={this.props.key}>
          <div className="header-top">
            <HeaderMenu />
          </div>
        </header>
        <section className="notfound">
          <Container className="notfound-container">
            <Row className="notfound-row">
              <Col className="notfound-col" lg={6}>
                <img src={notFoundPic} alt="" className="w-100 notfound-img" />
              </Col>
              <Col className="notfound-col" lg={6}>
                <p className="notfound-text">
                  Страница, которую ты ищешь, не существует
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <footer className="footer">
          <FooterMain />
        </footer>
      </div>
    );
  }
}

export default NotFound;

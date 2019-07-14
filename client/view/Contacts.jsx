import React from 'react';
import { Helmet } from 'react-helmet';

import FooterMain from '../components/FooterMain';
import HeaderMenu from '../components/HeaderMenu';
import ContactsMain from '../components/ContactsMain';

class Contacts extends React.Component {
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
          <title>Контакты | Knowledge</title>
          <meta name="description" content="Контактная страница сайта knowledge.uz. Учебные курсы от профессиональной команды разработчиков в Ташкент" />
          <meta name="keywords" content="учебные курсы в Ташкент, программирование, веб-технологии, проекты, учебный центр, создание сайтов" />

          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Knowledge.uz" />
          <meta property="og:title" content="Knowledge.uz | Лучшие курсы программирования в Ташкенте" />
          <meta property="og:description" content="Мы расскажем, покажем и научим тебя провильному порграммированию и дадим возможность стажироваться!" />
          <meta property="og:url" content="https://knowledge.uz" />
          <meta property="og:image" content="http://94.158.52.41:8888/media/girl-big_vNDgE7v.png" />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
        <header className="header with-padding" key={this.props.key}>
          <div className="header-top">
            <HeaderMenu />
          </div>
        </header>
        <section className="contacts">
          <ContactsMain />
        </section>
        <footer className="footer">
          <FooterMain />
        </footer>
      </div>
    );
  }
}

export default Contacts;

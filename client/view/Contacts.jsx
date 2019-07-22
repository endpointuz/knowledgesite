import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import FooterMain from '../components/FooterMain';
import HeaderMenu from '../components/HeaderMenu';
import ContactsMain from '../components/ContactsMain';
import MySnackbar from '../components/ep-components/Snackbar';
import * as actions from '../actions';


const mapStateToProps = state => ({
  requestCallData: state.requestCallData,
  snackbarVisible: state.snackbarVisible,
});

const actionCreators = {
  closeSnackbar: actions.closeSnackbar,
};


@connect(mapStateToProps, actionCreators)
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
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
      clearTimeout(this.timerHandle2);
      this.timerHandle2 = 0;
    }
    document.querySelector('.loader').classList.remove('loaded');
    document.querySelector('.loader-circle').classList.remove('loaded');
  }

  render() {
    const {
      requestCallData,
      snackbarVisible,
      closeSnackbar,
    } = this.props;

    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <MySnackbar
          requestCallData={requestCallData}
          snackbarVisible={snackbarVisible}
          closeSnackbar={closeSnackbar}
        />
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

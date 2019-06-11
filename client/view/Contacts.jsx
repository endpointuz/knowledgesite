import React from 'react';

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

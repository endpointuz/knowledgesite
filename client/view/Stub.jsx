import React from 'react';

import logoImg from '../assets/img/logo.png';

class Stub extends React.Component {
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
      <div className="flex-item">
        <img id="image" src={logoImg} alt="" />
          <p id="borderText">Cайт находится в разработке</p>
          <hr />
            <p id="text">Website under construction</p>
      </div>
    );
  }
}

export default Stub;

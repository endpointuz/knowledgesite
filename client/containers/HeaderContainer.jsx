import React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import HeaderMain from '../components/HeaderMain';

class HeaderContainer extends React.Component {

  render() {
    return (
      <header className="header with-padding" key={this.props.key}>
        <div className="header-top">
          <HeaderMenu />
        </div>
        <HeaderMain />
      </header>
    );
  }
}


export default HeaderContainer;

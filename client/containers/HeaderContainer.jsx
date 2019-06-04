import React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import HeaderMain from '../components/HeaderMain';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setOffset({ data: window.pageYOffset });
  }

  render() {
    return (
      <header className="header with-padding">
        <div className="header-top">
          <HeaderMenu
            setOffset={this.props.setOffset}
            windowOffsetY={this.props.windowOffsetY}
            setVisibilityMenu={this.props.setVisibilityMenu}
            menuVisibility={this.props.menuVisibility}
          />
        </div>
        <HeaderMain />
      </header>
    );
  }
}


export default HeaderContainer;

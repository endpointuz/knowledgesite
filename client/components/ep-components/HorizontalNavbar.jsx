import React from 'react';

class HorizontalNavbar extends React.Component {
  render() {
    const {
      children,
      className = '',
    } = this.props;

    return (
      <ul className={`menu-list ${className}`}>
        {children.map((el, i) => (
          <li className="menu-list-item" key={i}>
            {el}
          </li>
        ))}
      </ul>
    );
  }
}

export default HorizontalNavbar;

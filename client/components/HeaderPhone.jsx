import React from 'react';

class HeaderPhone extends React.Component {
  render() {
    const {
      number,
      label,
    } = this.props;
    return (
      <div className="header-phone">
        <span className="header-phone-label">{label}:</span>
        <span className="header-phone-number">
          <a href={`tel:${number.replace(/[ -]/g, '')}`}>{number}</a>
        </span>
      </div>
    );
  }
}

export default HeaderPhone;

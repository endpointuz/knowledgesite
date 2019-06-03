import React from 'react';
import { Link } from 'react-router-dom';

class Elink extends React.Component {
  render() {
    const {
      children,
      to,
      target,
      className,
    } = this.props;
    return (
      <Link className={`elink ${className}`} to={to} target={target}>{children}</Link>
    );
  }
}

export default Elink;

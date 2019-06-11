import React from 'react';

const ContactCard = ({
  children = [],
  renderIcon = () => {},
}) => (
  <div className="contact-card">
    <div className="contact-card-icon">
      {renderIcon()}
    </div>
    <div className="contact-card-text">
      {children}
    </div>
  </div>
);

export default ContactCard;

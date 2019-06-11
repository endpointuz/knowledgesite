import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profit = ({
  title,
  description,
}) => (
  <div className="profit-s">
    <div className="profit-s-header">
      <FontAwesomeIcon icon="check" className="profit-s-icon" />
      <h4 className="profit-s-title">{title}</h4>
    </div>
    <p className="profit-s-description">{description}</p>
  </div>
);

export default Profit;

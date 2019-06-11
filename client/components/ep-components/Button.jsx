import React from 'react';

const Button = ({
  type = 'primary',
  htmlType = 'button',
  children,
  onClick,
  className = '',
  fullSize = false,
  style,
}) => (
  <button
    type={htmlType}
    className={`ep-btn ep-btn-${type} ${className}${fullSize ? 'width-100' : ''}`}
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
);

export default Button;

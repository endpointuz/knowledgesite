import React from 'react';

const Button = ({
  type = 'primary',
  children,
  onClick,
  className,
  style,
}) => (
  <button
    type="button"
    className={`ep-btn ep-btn-${type} ${className}`}
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
);

export default Button;

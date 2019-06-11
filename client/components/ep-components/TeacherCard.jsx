import React from 'react';

const TeacherCard = ({
  img,
  title,
  description,
  className = '',
  style = null,
}) => (
  <div className={`teacher-card ${className}`} style={style}>
    <img src={img} alt="teacher" className="teacher-card-image" />
    <div className="teacher-card-text">
      <h4 className="teacher-card-title">{title}</h4>
      <p className="teacher-card-description">{description}</p>
    </div>
  </div>
);

export default TeacherCard;

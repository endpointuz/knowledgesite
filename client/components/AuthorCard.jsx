import React from 'react';

const AuthorCard = ({
  name,
  surname,
  photo,
  description,
}) => (
  <div className="author">
    <div className="author-photo">
      <img src={photo} alt="фото автора статьи" />
    </div>
    <div className="author-credits">
      <div className="author-name">{name} {surname}</div>
      <div className="author-position">{description}</div>
    </div>
  </div>
);

export default AuthorCard;

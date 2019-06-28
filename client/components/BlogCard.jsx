import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { HeaderTitle } from './ep-components';

const BlogCard = (
  {
    title,
    description,
    category,
    date,
    link,
  },
) => (
  <div className="blog-card">
    <HeaderTitle center={false} titleType="h3" level={3}>
      <Link to={link} style={{ color: '#1E266D' }}>
        {title}
      </Link>
    </HeaderTitle>
    <p className="blog-card-description">{description}</p>
    <div className="blog-card-stats">
      <div className="blog-card-category">
        <a href="">{category}</a>
      </div>
      <div className="blog-card-date">
        <FontAwesomeIcon icon={['far', 'clock']} />
        {date}
      </div>
      <div className="blog-card-share">
        <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
        <a href="">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          &nbsp;Facebook
        </a>
        <a href="">
          <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
          &nbsp;Telegram
        </a>
      </div>
    </div>
  </div>
);

export default BlogCard;

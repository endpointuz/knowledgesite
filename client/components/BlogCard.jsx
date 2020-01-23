import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import moment from 'moment';
import { HeaderTitle } from './ep-components';

const BlogCard = (
  {
    title,
    description,
    date,
    author,
    slug,
  },
) => (
  <div className="blog-card">
    <HeaderTitle center={false} titleType="h3" level={3}>
      <Link to={`/blog/${slug}`} style={{ color: '#1E266D' }}>
        {title}
      </Link>
    </HeaderTitle>
    {ReactHtmlParser(description)}
    <div className="blog-card-stats">
      <div className="blog-card-category">
        <span>
          <FontAwesomeIcon icon={['fas', 'user']} />
          &nbsp; {author.name} {author.secondName}
        </span>
      </div>
      <div className="blog-card-date">
        <FontAwesomeIcon icon={['far', 'clock']} />
        {moment(date).format('DD MMMM YYYY')}
      </div>
      <div className="blog-card-share">
        <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.facebook.com/sharer/sharer.php?u=https://knowledge.uz/blog/${slug}/`}
        >
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          &nbsp;Facebook
        </a>
        <br className="blog-card-share-divider"/>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`tg://msg_url?url=https://knowledge.uz/blog/${slug}/`}
        >
          <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
          &nbsp;Telegram
        </a>
      </div>
    </div>
  </div>
);

export default BlogCard;

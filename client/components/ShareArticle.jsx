import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShareArticle = ({ link: { pathname } }) => (
  <div className="share-article">
    <h3 className="share-article-title">Поделись с друзьями!</h3>
    <div className="share-article-links">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.facebook.com/sharer/sharer.php?u=https://knowledge.uz${pathname}/`}
      >
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        &nbsp;Facebook
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`tg://msg_url?url=https://knowledge.uz${pathname}/`}
      >
        <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
        &nbsp;Telegram
      </a>
    </div>
  </div>
);

export default ShareArticle;

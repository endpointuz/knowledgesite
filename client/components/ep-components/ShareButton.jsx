import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import share from '../../assets/img/share.svg';

const PosedDiv = posed.div({
  enter: {
    width: 'auto',
    applyAtStart: {
      display: 'flex',
    },
  },
  exit: {
    width: 0,
    applyAtEnd: {
      display: 'none',
    },
  },
});

const ShareButton = (
  { shareTo },
) => {
  const [isVisible, toggleVisibility] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleVisibility(!isVisible);
  };

  return (
    <div className="share">
      <a href="" className="share-button" onClick={handleToggle}>
        {
          isVisible
            ? <FontAwesomeIcon icon="times" style={{ color: '#999' }} />
            : <img src={share} alt="" />
        }
      </a>
      <PosedDiv className="share-links" pose={isVisible ? 'enter' : 'exit'}>
        <a target="_blank"
           rel="noopener noreferrer"
           href={`https://www.facebook.com/sharer/sharer.php?u=https://knowledge.uz${shareTo}/`}
           className="share-link fb"
        >
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </a>
        <a target="_blank"
           rel="noopener noreferrer"
           href={`tg://msg_url?url=https://knowledge.uz${shareTo}/`}
           className="share-link tg">
          <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
        </a>
      </PosedDiv>
    </div>
  )
};

export default withRouter(ShareButton);

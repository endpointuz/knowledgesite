import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pose from 'react-pose';

const Content = pose.div({
  closed: { height: 0 },
  open: { height: 'auto' },
});

const Accordion = ({
  blocks,
}) => {
  // const { title, description } = blocks;
  const [visibleBlocks, setVisibleBlock] = useState([]);

  const handleTitleClick = (e) => {
    const target = e.currentTarget.getAttribute('data-target');
    if (visibleBlocks.includes(target)) {
      setVisibleBlock(visibleBlocks.filter(el => el !== target));
      return;
    }
    setVisibleBlock(visibleBlocks.concat(target));
  };

  const isVisible = (block) => {
    return visibleBlocks.includes(block);
  };


  return (
    <div className="accordion">
      {blocks.map((el, i) => (
        <div className="accordion-block" key={String(el.id)}>
          <div className="accordion-title" data-target={String(el.id)} onClick={handleTitleClick}>
            <Container>
              <Row noGutters={true} className="align-items-center flex-nowrap flex-lg-wrap">
                <Col xs="auto" xl="auto">
                  <div className="accordion-title-num">{i + 1}</div>
                </Col>
                <Col xs={10} xl="auto" className="px-4">
                  <div className="accordion-title-name">{el.title}</div>
                </Col>
                <Col xs="auto" xl="auto" className="ml-auto">
                  <div className="accordion-title-icon">
                    <FontAwesomeIcon icon={isVisible(String(el.id)) ? 'chevron-up' : 'chevron-down'} style={{ color: '#FFB15B' }} />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <Content className="accordion-description" pose={isVisible(String(el.id)) ? 'open' : 'closed'}>
            <div className="accordion-description-wrapper">
              {el.description}
            </div>
          </Content>
        </div>
      ))}
    </div>
  );
}

export default Accordion;

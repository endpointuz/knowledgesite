import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import HeaderTitle from './ep-components/HeaderTitle';
import pythonLogo from '../assets/img/python-seeklogo.com.svg';
// import php from '../assets/img/python-seeklogo.com.svg';
import nodejsLogo from '../assets/img/nodejs-seeklogo.com.svg';
import goLogo from '../assets/img/go-seeklogo.com.svg';
import clojureLogo from '../assets/img/clojure-seeklogo.com.svg';
import kotlinLogo from '../assets/img/kotlin-seeklogo.com.svg';
import javaLogo from '../assets/img/java-seeklogo.com.svg';
import gitLogo from '../assets/img/git-seeklogo.com.svg';
import jsLogo from '../assets/img/javascript-js-seeklogo.com.svg';
import reactLogo from '../assets/img/react-seeklogo.com.svg';
import vueLogo from '../assets/img/vuejs-seeklogo.com.svg';
import cssLogo from '../assets/img/css3-seeklogo.com.svg';
// import htmlLogo from '../assets/img/h';
import bootstrapLogo from '../assets/img/bootstrap-seeklogo.com.svg';
import githubLogo from '../assets/img/github-seeklogo.com.svg';
import bitbucketLogo from '../assets/img/bitbucket-seeklogo.com.svg';
// import mySqlLogo from '../assets/img/my';
import sqlLiteLogo from '../assets/img/sqlite-seeklogo.com.svg';
import dockerLogo from '../assets/img/docker-seeklogo.com.svg';
import centOsLogo from '../assets/img/centos-seeklogo.com.svg';
// import linuxLogo from '../assets/img/centos-seeklogo.com.svg';
// import ubuntuLogo from '../assets/img/css3-seeklogo.com.svg';
import illustratorLogo from '../assets/img/adobe-illustrator-cc-seeklogo.com.svg';
import photoshopLogo from '../assets/img/adobe-photoshop-cc-seeklogo.com.svg';
import xdLogo from '../assets/img/adobe-xd-seeklogo.com.svg';
import figmaLogo from '../assets/img/figma-seeklogo.com.svg';
import sketchLogo from '../assets/img/sketch-seeklogo.com.svg';

const techIcons = [
  pythonLogo,
  nodejsLogo,
  goLogo,
  clojureLogo,
  kotlinLogo,
  javaLogo,
  gitLogo,
  jsLogo,
  reactLogo,
  vueLogo,
  cssLogo,
  bootstrapLogo,
  githubLogo,
  bitbucketLogo,
  sqlLiteLogo,
  dockerLogo,
  centOsLogo,
  illustratorLogo,
  photoshopLogo,
  xdLogo,
  figmaLogo,
  sketchLogo,
];

const Separator = ({ children }) => (
  <>
    <div className="w-100 h-my" />
    {children}
  </>
);

const TechnologiesMain = () => (
  <Container className="p-0">
    <Row noGutters={true} style={{ marginBottom: 53 }}>
      <Col xl={12}>
        <HeaderTitle
          titleType="h2"
        >
          Наши знания и технологии
        </HeaderTitle>
      </Col>
    </Row>
    <Row className="align-items-center" noGutters={true}>
      {techIcons.map((el, i) => {
        return (i > 1 && i % 8 === 0)
          ? (
            <Separator key={i}>
              {<div className="my-col"><img src={el} alt="" /></div>}
            </Separator>
          )
          : (
            <div className="my-col" key={i}><img src={el} alt="" /></div>
          );
      })}
    </Row>
  </Container>
);

export default TechnologiesMain;

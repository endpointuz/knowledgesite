import express from 'express';
import { matchRoutes } from 'react-router-config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
  faCheck,
  faHome,
  faHistory,
  faPhone,
  faEnvelope,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import '@babel/polyfill';
import renderer from './renderer';
import createStore from '../utils/createStore';
import routes from '../utils/routes';
import '../client/assets/img/favicons/android-chrome-192x192.png';
import '../client/assets/img/favicons/android-chrome-512x512.png';
import '../client/assets/img/favicons/apple-touch-icon.png';
import '../client/assets/img/favicons/favicon-16x16.png';
import '../client/assets/img/favicons/favicon-32x32.png';
import '../client/assets/img/favicons/mstile-150x150.png';
import '../client/assets/img/favicons/safari-pinned-tab.svg';
import '../client/assets/img/favicons/favicon.ico';


library.add(
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
  faCheck,
  faHome,
  faHistory,
  faPhone,
  faEnvelope,
  faClock,
  faExternalLinkAlt,
);

const app = express();

app.use(express.static('public'));

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
});

app.get('*', (req, res) => {
  const store = createStore({});

  const promises = matchRoutes(routes, req.path).map(
    ({ route, match }) => (route.loadData ? route.loadData(store, match, req.get('cookie') || {}, req.query) : null),
  );

  Promise.all(promises).then(() => {
    const result = renderer(req, store);
    const { context } = result;
    if (context && context.status !== undefined) {
      res.status(context.status);
    }
    res.send(result.jsx);
  });
});

app.listen(3000, () => {
  console.log('Server is listenting to port 3000');
});

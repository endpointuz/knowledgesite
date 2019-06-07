import express from 'express';
import { matchRoutes } from 'react-router-config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import '@babel/polyfill';
import renderer from './renderer';
import createStore from '../utils/createStore';
import routes from '../utils/routes';


library.add(
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
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

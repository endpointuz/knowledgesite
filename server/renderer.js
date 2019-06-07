import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import routes from '../utils/routes.js';
import ScrollToTop from '../client/components/ScrollToTop';

const renderer = (req, store) => {
  const context = {};
  const state = store.getState();

  const content = renderToString(
    <Provider store={store}>
      <Router context={context} location={req.path} query={req.query}>
        <ScrollToTop>
          {renderRoutes(routes)}
        </ScrollToTop>
      </Router>
    </Provider>,
  );
  const jsx = `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <link rel="stylesheet" href="/main.css" />
      </head>

      <body>
          <div class="loader">
            <div class="loader-circle"></div>
          </div>
          <div id="app">${content}</div>
          <script>
            window.STORE_DATA = ${JSON.stringify(state).replace('<script>', '')}
          </script>
          <script src="/vendors.js"></script>
          <script src="/runtime.js"></script>
          <script src="/main.js"></script>
      </body>
      </html>
  `;

  return { jsx, context };
};

export default renderer;

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
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

  const helmet = Helmet.renderStatic();
  const jsx = `
      <!DOCTYPE html>
      <html>
      <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <meta http-equiv="content-language" content="ru" />
          <meta name="robots" content="index,follow" />
          <link rel="icon" sizes="16x16" href="/img/favicon-16x16.png">
          <link rel="icon" sizes="32x32" href="/img/favicon-32x32.png">
          <link rel="icon" href="/img/favicon.ico">
          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#00а0ff" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" sizes="192x192" href="/img/android-chrome-192x192.png">
          <link rel="icon" sizes="512x512" href="/img/android-chrome-512x512.png">
          <link rel="stylesheet" href="/main.css" />
          <meta name="mailru-domain" content="vSlwJnaL3xoGZwxr" />
          <meta name="yandex-verification" content="69167ef94ccd91b6" />
          <meta name="google-site-verification" content="RnzsoONBawJHhfHR2juhyAbaJ8mVkouLkSaJXUySGfk" />
          <!-- Yandex.Metrika counter -->
          <script type="text/javascript" >
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
             m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
             ym(54481213, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
             });
          </script>
          <noscript><div><img src="https://mc.yandex.ru/watch/54481213" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
          <!-- /Yandex.Metrika counter -->
          <!-- Facebook Pixel Code -->
          <script>
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2384642925113823');
            fbq('track', 'PageView');
          </script>
          <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=2384642925113823&ev=PageView&noscript=1"
          /></noscript>
          <!-- End Facebook Pixel Code -->
      </head>

      <body>
          <div class="loader">
            <div class="loader-circle"></div>
          </div>
          <div id="app" class="flex-container">${content}</div>
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

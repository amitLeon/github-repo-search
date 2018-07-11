/**
 * @file Main app file.
 */
import express from 'express';
import proxy from 'http-proxy-middleware';
import bodyParser from 'body-parser';

import fallback from 'express-history-api-fallback';

import appRoutes from './app/routes/app-routes'; // route

import options from './config/options'; // config

export default function (production = false) {
  const app = express();

  app.use(bodyParser.json());

  // adding routes
  appRoutes(app);

  if (!production) {
    // DEV mode: use webpack dev server with proxy to have smae session
    app.use('/', proxy({ target: options.server.webpackFrontend, changeOrigin: true }));
  } else {
    // not dev mode: use static build files
    app.use('/', express.static(options.server.build));
    // is necessary as we use html5 history
    app.use(fallback('index.html', { root: `${__dirname}/${options.server.build}` }));
  }

  const { server: { port } } = options;
  app.listen(port, () => console.log(`Now browse to localhost:${port}`));
}

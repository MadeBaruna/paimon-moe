import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import fs from 'fs';
import path from 'path';

import { i18nMiddleware } from './i18n.js';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

function serve(pathname) {
  const filter = (req) => req.path === pathname;
  const read = (file) => fs.readFileSync(path.join('__sapper__/dev', file));

  return (req, res, next) => {
    if (filter(req)) {
      try {
        const file = path.posix.normalize(decodeURIComponent(req.path));
        const data = read(file);
        res.setHeader('Content-Type', 'text/javascript');
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.end(data);
      } catch (err) {
        if (err.code === 'ENOENT') {
          next();
        } else {
          console.error(err);
          res.statusCode = 500;
          res.end('an error occurred while reading a static file from disk');
        }
      }
    } else {
      next();
    }
  };
}

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    i18nMiddleware(),
    serve('/firebase-messaging-sw.js'),
    serve('/firebase-messaging-sw.js.map'),
    sapper.middleware(),
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });

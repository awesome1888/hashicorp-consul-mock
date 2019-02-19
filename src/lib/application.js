import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import logger from './logger';

import attachHomeAPI from '../api/home';

export default class Application {
    static async make() {
        logger.info('Initializing the application');

        const instance = new this();

        const app = express();
        instance.attachErrorHandler(app);

        const hostname = await settings.get('network.hostname', 'localhost');
        const port = await settings.get('network.port', 3010);

        app.set('host', hostname);
        app.set('port', port);
        // // increase the default parse depth of a query string and disable allowPrototypes
        // app.set('query parser', query => {
        //   return qs.parse(query, { allowPrototypes: false, depth: 10 });
        // });

        const corsSettings = await settings.get('network.cors');
        const origins = _.isne(corsSettings)
          ? corsSettings.split(',').map(x => x.trim())
          : [];
        if (_.iane(origins)) {
            app.use(
              cors({
                  origin: (origin, cb) => {
                      // allow requests with no origin, like mobile apps or curl requests
                      if (!origin || _.contains(origins, origin)) {
                          return cb(null, true);
                      }

                      return cb(new Error(), false); // todo: throw 403
                  },
              }),
            );
        }

        app.use(helmet());
        // // turn on JSON parser for REST services
        app.use(express.json());
        // // turn on URL-encoded parser for REST services
        // app.use(
        //   express.urlencoded({
        //     extended: true,
        //   }),
        // );

        // write the middleware here
        attachHomeAPI(app);

        instance._express = app;
        instance._database = database;
        instance._graphql = server;

        logger.info('Application initialized');

        return instance;
    }

    attachErrorHandler(app) {
        // catching async unhandled rejections
        process
          .on('unhandledRejection', reason => {
              logger.error('Unhandled rejection', reason);
          })
          .on('uncaughtException', err => {
              logger.error('Uncaught exception', err);
          });

        // catching normal unhandled exceptions
        app.use((err, req, res, next) => {
            logger.error('Unhandled exception', err);
            res.send('Nasty error'); // todo: explain here
        });
    }

    async listen() {
        const port = this._express.get('port');
        const hostname = this._express.get('host');

        return new Promise(resolve => {
            this._server = this._express.listen({ port }, () => {
                logger.info(`🚀 Server ready at http://${hostname}:${port}`, !__TEST__);
                resolve();
            });
        });
    }

    async launch() {
        await this.listen();
    }

    async shutdown() {
        if (this._server) {
            return new Promise(resolve => {
                this._server.close(resolve);
            });
        }
    }

    getExpress() {
        return this._express;
    }
}

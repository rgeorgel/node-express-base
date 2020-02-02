import express from 'express';
import logger from 'morgan';
import * as bodyParser from 'body-parser';

import ApplicationRouter from '@app/routes';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {   
    this.express.use('/', ApplicationRouter);
  }
}

export default new App().express;
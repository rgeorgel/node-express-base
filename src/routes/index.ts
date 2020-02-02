import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import * as swaggerOptions from '@app/swagger.json';
import healthRoute from '@app/modules/health/health.route';


export class ApplicationRouter {
  router: Router
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    const options: swaggerJSDoc.Options = {
      swaggerDefinition: swaggerOptions,
      apis: [
        './src/modules/**/*.model.ts',
        './src/modules/**/*.route.ts',
      ],
    }

    const specs = swaggerJSDoc(options);

    this.router.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

    this.router.use('/health', healthRoute);
  }
}

const applicationRouter = new ApplicationRouter();
applicationRouter.init();

export default applicationRouter.router;

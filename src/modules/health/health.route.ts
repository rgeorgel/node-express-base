import { Router, Request, Response } from 'express';
import { SuccessResponse } from '@app/modules/shared/middleware/success-response';
import healthService from './health.service';

export class HealthRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  public get(_req: Request, res: Response) {
    const health = healthService.get();
    const response = new SuccessResponse(health);

    res.json(response);
  }

  init() {
    /**
     * @swagger
     * /health:
     *   get:
     *     tags:
     *       - health
     *     name: check application health
     *     summary: check application health
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     responses:
     *       '200':
     *         description: A single health object
     *         schema:
     *           $ref: '#/components/schemas/Health'
     */
    this.router.get('/', this.get);
  }
}

const healthRouter = new HealthRouter();
healthRouter.init();

export default healthRouter.router;

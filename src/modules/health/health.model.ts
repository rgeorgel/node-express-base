/**
 * @swagger
 * components:
 *   schemas:
 *     Health:
 *       type: object
 *       properties:
 *         api:
 *           type: boolean
 *         database:
 *           type: boolean
 */
export interface Health {
  api: boolean;
  database: boolean;
}

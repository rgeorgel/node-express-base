import { Health } from './health.model';

export class HealthService {
  public get() {
    const health: Health = {
      api: true,
      database: false,
    };

    return health;
  }
}

const healthService = new HealthService();

export default healthService;

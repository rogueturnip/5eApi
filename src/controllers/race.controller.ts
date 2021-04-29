import { Application } from 'express';
import { RaceService } from '../services/race.services';
import { query } from 'express-validator';

export class RaceController {
  private raceService: RaceService;

  constructor(private app: Application) {
    this.raceService = new RaceService();
    this.routes();
  }

  public routes() {
    this.app
      .route('/races')
      .get(
        query('raw').optional().isBoolean(),
        query('page_size').optional().isInt({ min: 1, max: 25 }),
        query('page').optional().isInt({ min: 1 }),
        this.raceService.root,
      );
    this.app
      .route('/races/:id')
      .get(query('raw').optional().isBoolean(), this.raceService.single);
  }
}

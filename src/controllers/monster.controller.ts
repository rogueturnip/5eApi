import { Application } from 'express';
import { MonsterService } from '../services/monster.services';
import { query } from 'express-validator';

export class MonsterController {
  private monsterService: MonsterService;

  constructor(private app: Application) {
    this.monsterService = new MonsterService();
    this.routes();
  }

  public routes() {
    this.app
      .route('/monsters')
      .get(
        query('raw').optional().isBoolean(),
        query('page_size').optional().isInt({ min: 1, max: 25 }),
        query('page').optional().isInt({ min: 1 }),
        this.monsterService.root,
      );
    this.app
      .route('/monsters/:id')
      .get(query('raw').optional().isBoolean(), this.monsterService.single);
  }
}

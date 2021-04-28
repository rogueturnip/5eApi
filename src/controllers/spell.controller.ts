import { Application } from 'express';
import { SpellService } from '../services/spell.services';
import { query } from 'express-validator';

export class SpellController {
  private spellService: SpellService;

  constructor(private app: Application) {
    this.spellService = new SpellService();
    this.routes();
  }

  public routes() {
    this.app
      .route('/spells')
      .get(
        query('raw').optional().isBoolean(),
        query('page_size').optional().isInt({ min: 1, max: 25 }),
        query('page').optional().isInt({ min: 1 }),
        this.spellService.root,
      );
    this.app
      .route('/spells/:id')
      .get(query('raw').optional().isBoolean(), this.spellService.single);
  }
}

import { Application } from 'express';
import { ItemService } from '../services/item.services';
import { query } from 'express-validator';

export class ItemController {
  private itemService: ItemService;

  constructor(private app: Application) {
    this.itemService = new ItemService();
    this.routes();
  }

  public routes() {
    this.app
      .route('/items')
      .get(
        query('raw').optional().isBoolean(),
        query('base').optional().isBoolean(),
        query('page_size').optional().isInt({ min: 1, max: 25 }),
        query('page').optional().isInt({ min: 1 }),
        this.itemService.root,
      );
    this.app
      .route('/items/:id')
      .get(query('raw').optional().isBoolean(), this.itemService.single);
  }
}

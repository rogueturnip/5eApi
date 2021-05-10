import { Application } from 'express';
import { ClassService } from '../services/class.services';
import { query } from 'express-validator';

export class ClassController {
  private classService: ClassService;

  constructor(private app: Application) {
    this.classService = new ClassService();
    this.routes();
  }

  public routes() {
    this.app
      .route('/classes')
      .get(
        query('raw').optional().isBoolean(),
        query('base').optional().isBoolean(),
        query('page_size').optional().isInt({ min: 1, max: 25 }),
        query('page').optional().isInt({ min: 1 }),
        this.classService.root,
      );
    this.app
      .route('/classes/:id')
      .get(query('raw').optional().isBoolean(), this.classService.single);
  }
}

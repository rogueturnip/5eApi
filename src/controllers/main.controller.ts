import { Application } from 'express';
import { MainService } from '../services/main.services';
import { query } from 'express-validator';

export class MainController {
  private mainService: MainService;

  constructor(private app: Application) {
    this.mainService = new MainService();
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.mainService.root);
    this.app.route('/favicon.ico').get((req, res) => res.status(204));
  }
}

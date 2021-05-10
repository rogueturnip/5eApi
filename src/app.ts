//src/app.ts

import express, { Application } from 'express';
import cors from 'cors';
import { authHandler } from './middleware/auth.middleware';
import { MainController } from './controllers/main.controller';
import { SpellController } from './controllers/spell.controller';
import { MonsterController } from './controllers/monster.controller';
import { RaceController } from './controllers/race.controller';
import { ItemController } from './controllers/item.controller';
import { ClassController } from './controllers/class.controller';
import connect from './database/connect';
import { DATABASE } from './constants/settings.constants';
import { Class } from './models/class.model';

class App {
  public app: Application;

  public mainController: MainController;
  public spellController: SpellController;
  public monsterController: MonsterController;
  public raceController: RaceController;
  public itemController: ItemController;
  public classController: ClassController;

  constructor() {
    this.app = express();
    this.setConfig();
    connect({ db: DATABASE });

    this.mainController = new MainController(this.app);
    this.spellController = new SpellController(this.app);
    this.monsterController = new MonsterController(this.app);
    this.raceController = new RaceController(this.app);
    this.itemController = new ItemController(this.app);
    this.classController = new ClassController(this.app);
  }

  private setConfig() {
    //Allows us to receive requests with data in json format
    this.app.use(express.json({ limit: '50mb' }));

    //Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));

    //Enables cors
    this.app.use(cors());

    //Enable Auth
    this.app.use(authHandler);
  }
}

export default new App().app;

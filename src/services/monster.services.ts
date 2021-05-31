import { Request, Response } from 'express';
import { MonsterModel as Monster } from '../models/monster.model';
import { validationResult } from 'express-validator';
import { MonsterFormatter } from '../formatters/monster.formatter';

export class MonsterService {
  public async root(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const limit: number = +req.query?.page_size || 10;
    let page: number = +req.query?.page || 1;
    const monsterCount: number = await Monster.count({});
    const maxPages = Math.ceil(monsterCount / limit);
    if (page > maxPages) {
      page = maxPages;
    }
    const skip: number = (page - 1) * limit;
    const monsters = await Monster.find({}).skip(skip).limit(limit);
    // const monsters = await Monster.aggregate([
    //   {
    //     "$facet": {
    //       "totalData": [
    //         { "$match": {} },
    //         { "$skip": skip },
    //         { "$limit": limit }
    //       ],
    //       "totalCount": [
    //         {
    //           "count": { "$sum": 1 }
    //         }
    //       ]
    //     }
    //   }
    // ])
    console.log('monsters', monsterCount, maxPages);
    const monsterReturn = await Promise.all(
      monsters.map((monster) => {
        return MonsterFormatter.singleMonster(monster);
      }),
    );
    return res.status(200).json(monsterReturn);
  }

  public async single(req: Request, res: Response) {
    const { id } = req.params as { id: string };
    const raw: boolean = req.query?.raw === 'true' || false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const monster = await Monster.findOne({ id: id });
    if (monster == null) {
      return res.status(404).json({ message: 'not found' });
    }
    if (raw) {
      return res.status(200).json(monster);
    }
    return res.status(200).json(monster);
  }
}

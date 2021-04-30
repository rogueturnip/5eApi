import { Request, Response } from 'express';
import { IRace, Race } from '../models/race.model';
import { validationResult } from 'express-validator';
import { RaceFormatter } from '../formatters/race.formatter';

export class RaceService {
  public async root(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const limit: number = +req.query?.page_size || 10;
    let page: number = +req.query?.page || 1;
    const raceCount: number = await Race.count({});
    const maxPages = Math.ceil(raceCount / limit);
    if (page > maxPages) {
      page = maxPages;
    }
    const skip: number = (page - 1) * limit;
    const races: Array<IRace> = await Race.find({})
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 });
    console.log('races', raceCount, maxPages);
    const raceReturn = await Promise.all(
      races.map((race) => {
        return RaceFormatter.singleRace(race);
      }),
    );
    return res.status(200).json(raceReturn);
  }

  public async single(req: Request, res: Response) {
    const { id } = req.params as { id: string };
    const errors = validationResult(req);
    const raw: boolean = req.query?.raw === 'true' || false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log('id', id);
    const race: IRace = await Race.findOne({ id: id });
    if (race == null) {
      return res.status(404).json({ message: 'not found' });
    }
    if (raw) {
      return res.status(200).json(race);
    }
    return res.status(200).json(RaceFormatter.singleRace(race));
  }
}

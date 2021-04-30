import { Request, Response } from 'express';
import { ISpell, Spell } from '../models/spell.model';
import { validationResult } from 'express-validator';
import { SpellFormatter } from '../formatters/spell.formatter';

export class SpellService {
  public async root(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const limit: number = +req.query?.page_size || 10;
    let page: number = +req.query?.page || 1;
    const spellCount: number = await Spell.count({});
    const maxPages = Math.ceil(spellCount / limit);
    if (page > maxPages) {
      page = maxPages;
    }
    const skip: number = (page - 1) * limit;
    const spells: Array<ISpell> = await Spell.find({})
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 });
    console.log('spells', spellCount, maxPages);
    const spellReturn = await Promise.all(
      spells.map((spell) => {
        return SpellFormatter.singleSpell(spell);
      }),
    );
    return res.status(200).json(spellReturn);
  }

  public async single(req: Request, res: Response) {
    const { id } = req.params as { id: string };
    const errors = validationResult(req);
    const raw: boolean = req.query?.raw === 'true' || false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log('id', id);
    const spell: ISpell = await Spell.findOne({ id: id });
    if (spell == null) {
      return res.status(404).json({ message: 'not found' });
    }
    if (raw) {
      return res.status(200).json(spell);
    }
    return res.status(200).json(SpellFormatter.singleSpell(spell));
  }
}

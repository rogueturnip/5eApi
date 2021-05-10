import { Request, Response } from 'express';
import { IClass, Class } from '../models/class.model';
import { validationResult } from 'express-validator';
import { ClassFormatter } from '../formatters/class.formatter';

export class ClassService {
  public async root(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const limit: number = +req.query?.page_size || 10;
    let page: number = +req.query?.page || 1;
    const itemCount: number = await Class.count({});
    const maxPages = Math.ceil(itemCount / limit);
    if (page > maxPages) {
      page = maxPages;
    }
    const skip: number = (page - 1) * limit;
    let query = {};
    if (req.query?.base) query = { base: true };
    const items: Array<IClass> = await Class.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 });
    console.log('classes', itemCount, maxPages);
    const itemReturn = await Promise.all(
      items.map((item) => {
        return ClassFormatter.singleItem(item);
      }),
    );
    return res.status(200).json(itemReturn);
  }

  public async single(req: Request, res: Response) {
    const { id } = req.params as { id: string };
    const errors = validationResult(req);
    const raw: boolean = req.query?.raw === 'true' || false;
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log('id', id);
    const item: IClass = await Class.findOne({ id: id });
    if (item == null) {
      return res.status(404).json({ message: 'not found' });
    }
    if (raw) {
      return res.status(200).json(item);
    }
    return res.status(200).json(ClassFormatter.singleItem(item));
  }
}

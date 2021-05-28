import { Request, Response } from 'express';
import { ItemModel as Item } from '../models/item.model';
import { validationResult } from 'express-validator';
import { ItemFormatter } from '../formatters/item.formatter';

export class ItemService {
  public async root(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const limit: number = +req.query?.page_size || 10;
    let page: number = +req.query?.page || 1;
    const itemCount: number = await Item.count({});
    const maxPages = Math.ceil(itemCount / limit);
    if (page > maxPages) {
      page = maxPages;
    }
    const skip: number = (page - 1) * limit;
    let query = {};
    if (req.query?.base) query = { base: true };
    const items = await Item.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ id: 1 });
    console.log('items', itemCount, maxPages);
    const itemReturn = await Promise.all(
      items.map((item) => {
        return ItemFormatter.singleItem(item);
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
    const item = await Item.findOne({ id: id });
    if (item == null) {
      return res.status(404).json({ message: 'not found' });
    }
    if (raw) {
      return res.status(200).json(item);
    }
    return res.status(200).json(ItemFormatter.singleItem(item));
  }
}

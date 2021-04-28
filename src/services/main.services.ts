import { Request, Response } from 'express';

export class MainService {
  public async root(req: Request, res: Response) {
    return res.status(200).json({ message: '5eApi' });
  }
}

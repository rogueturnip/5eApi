import { Request, Response, NextFunction } from "express";
import * as _ from "lodash";

export const authHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userid, houseid, apikey } = req.headers as {
    userid: string;
    houseid: string;
    apikey: string;
  };
  req.local = {};
  // if (_.isEmpty(SPID)) {
  //   res.status(401).json({ message: "not authorized" });
  // }
  // req.local.serviceProviderId = SPID;
  next();
};

import { Request, Response } from 'express';

export default {
  'POST  /api/register': (_: Request, res: Response) => {
    res.send({ status: 'error', currentAuthority: 'user', firstErrorMessage:'123afawef' });
  },
};

import type { NextFunction, Request, Response } from 'express';
import { User } from '../models';

const checkDuplicateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    }).exec();
    if (user) {
      return res
        .status(400)
        .send({ message: 'Failed! Email is already in use!' });
    }
    next();
  } catch (error) {
    console.log('error', error);
    return res.status(500).send({ message: error });
  }
};

export default checkDuplicateEmail;

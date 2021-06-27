import type { NextFunction, Request, Response } from 'express';
import jwt, { Secret, TokenExpiredError } from 'jsonwebtoken';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers['x-access-token'] as string;

  if (!token) {
    return res.status(401).send({ message: 'No token provided!' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret);
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log('error:', error);
    if (error instanceof TokenExpiredError) {
      return res
        .status(401)
        .send({ message: 'Unauthorized! Access Token was expired!' });
    }
    return res.status(401).send({ message: 'Unauthorized!' });
  }
};

export default verifyToken;

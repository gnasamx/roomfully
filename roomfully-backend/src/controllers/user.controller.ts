import { User } from '../models';
import type { Request, Response } from 'express';

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(200).json({ message: 'No id provided!' });
    }
    const user = await User.findById({ _id: userId });
    if (user) {
      return res.status(200).json({
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      });
    }
  } catch (error) {
    console.log('error:', error);
    return res.status(200).json({ error });
  }
};

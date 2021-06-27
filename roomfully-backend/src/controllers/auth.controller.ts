import bcrypt from 'bcrypt';
import type { Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import config from '../config';
import { RefreshToken, User } from '../models';

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const user = await new User({
      firstname,
      lastname,
      email,
      password: bcrypt.hashSync(password, 8),
    }).save();
    if (user) {
      return res.send({ message: 'User was registered successfully!' });
    }
  } catch (error) {
    console.log('error:', error);
    return res.status(500).send({ message: error });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }
    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!checkPassword) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as Secret, {
      expiresIn: config.jwt.tokenExpiration,
    });

    const refreshToken = RefreshToken.createToken(user);

    res.status(200).send({
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      accessToken: token,
      refreshToken,
    });
  } catch (error) {
    console.log('error:', error);
    return res.status(500).send({ message: error });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken: token } = req.body;

    if (token === null) {
      return res.status(403).json({
        message: 'No refresh token provided!',
      });
    }

    const refreshToken = await RefreshToken.findOne({ token });

    if (!refreshToken) {
      return res
        .status(403)
        .json({ message: 'Refresh token is not in the database!' });
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.findByIdAndRemove(refreshToken._id, {
        useFindAndModify: false,
      }).exec();

      return res.status(403).json({
        message: 'Refresh token was expired. Please make a new signin request',
      });
    }

    const newAccessToken = jwt.sign(
      { id: refreshToken.user._id },
      process.env.JWT_SECRET as Secret,
      {
        expiresIn: config.jwt.tokenExpiration,
      }
    );

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (error) {
    console.log('error: ', error);
    return res.status(500).json({ message: error });
  }
};

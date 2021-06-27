import { Model, model, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import config from '../config';
import IUser from './user.model';

export interface IRefreshToken {
  token: string;
  user: typeof IUser;
  expiryDate: Date;
}

export interface RefreshTokenModel extends Model<IRefreshToken> {
  createToken(user: typeof IUser): string;
  verifyExpiration(refreshToken: IRefreshToken): boolean;
}

const schema = new Schema<IRefreshToken, RefreshTokenModel>({
  token: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  expiryDate: Date,
});

schema.statics.createToken = async (user: typeof IUser) => {
  let expiredAt = new Date();

  expiredAt.setSeconds(
    Number(expiredAt.getSeconds()) + Number(config.jwt.refreshTokenExpiration)
  );

  console.log('expiredAt ', expiredAt);

  let refreshToken = await new RefreshToken({
    token: uuidv4(),
    user: user._id,
    expiryDate: expiredAt.getTime(),
  }).save();

  console.log('refreshToken: ', refreshToken);
  return refreshToken.token;
};

schema.statics.verifyExpiration = (token) => {
  return token.expiryDate.getTime() < new Date().getTime();
};

const RefreshToken = model<IRefreshToken, RefreshTokenModel>(
  'RefreshToken',
  schema
);

export default RefreshToken;

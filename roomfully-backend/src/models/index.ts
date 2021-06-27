import mongoose from 'mongoose';
import User from './user.model';
import RefreshToken from './refreshToken.model';

mongoose.Promise = global.Promise;

export { mongoose, User, RefreshToken };

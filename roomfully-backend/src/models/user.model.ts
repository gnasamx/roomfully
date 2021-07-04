import { Schema, model } from 'mongoose';

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const schema = new Schema<IUser>({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const User = model<IUser>('User', schema);

export default User;

import mongoose from 'mongoose';

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const schema = new mongoose.Schema<IUser>({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const User = mongoose.model<IUser>('User', schema);

export default User;

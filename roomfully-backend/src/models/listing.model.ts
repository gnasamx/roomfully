import { Schema, model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  description: string;
  latitube: string;
  longitutde: string;
  property_type: string;
  room_type: string;
  accommodates: number,
}

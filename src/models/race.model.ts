import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IRace extends Document {
  id: string;
  name: string;
  source: string;
  page: number;
}

const RaceSchema: Schema = new Schema({
  id: { type: String, require: true, unique: true },
  name: { type: String, require: true, unique: false },
  source: { type: String, require: false, unique: false },
  page: { type: Number, require: false, unique: false },
});

export const Race: Model<IRace> = mongoose.model('Race', RaceSchema);

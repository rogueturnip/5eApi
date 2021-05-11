import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IClass extends Document {
  id: string;
  name: string;
  source: string;
  page: number;
}

const ClassSchema: Schema = new Schema({
  id: { type: String, require: true, unique: true },
  name: { type: String, require: true, unique: false },
  source: { type: String, require: false, unique: false },
  page: { type: Number, require: false, unique: false },
  // base: { type: Schema.Types.Mixed, require: false, unique: false },
});

export const Class: Model<IClass> = mongoose.model('Class', ClassSchema);

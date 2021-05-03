import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IItem extends Document {
  id: string;
  name: string;
  source: string;
  page: number;
  base: boolean;
}

const ItemSchema: Schema = new Schema({
  id: { type: String, require: true, unique: true },
  name: { type: String, require: true, unique: false },
  source: { type: String, require: false, unique: false },
  page: { type: Number, require: false, unique: false },
  // base: { type: Schema.Types.Mixed, require: false, unique: false },
  base: { type: Boolean, require: false, unique: false },
});

export const Item: Model<IItem> = mongoose.model('Item', ItemSchema);

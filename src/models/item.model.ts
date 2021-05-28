import { prop, getModelForClass } from '@typegoose/typegoose';

class Item {
  @prop()
  public id: string;
  @prop()
  public name: string;
  @prop()
  public source: string;
  @prop()
  public page: number;
  @prop()
  public base: boolean;
}

export const ItemModel = getModelForClass(Item);

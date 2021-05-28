import { prop, getModelForClass } from '@typegoose/typegoose';

class Class {
  @prop()
  public id: string;
  @prop()
  public name: string;
  @prop()
  public source: string;
  @prop()
  public page: number;
}

export const ClassModel = getModelForClass(Class);

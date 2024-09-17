import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { dashcase } from 'utils';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Category {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({
    unique: true,
    set: dashcase,
    default: function () {
      return this.name;
    },
  })
  slug: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

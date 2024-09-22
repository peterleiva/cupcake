import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, Types } from 'mongoose';
import { Category } from '../../category/schema/category';

export type ProductDocument = HydratedDocument<Product>;

@Schema({
  timestamps: true,
})
export class Product {
  @Prop({
    required: true,
  })
  name: string;

  @Prop()
  description: string;

  @Prop({
    required: true,
  })
  price: number;

  @Prop()
  thumbnail: string;

  @Prop({
    type: Types.ObjectId,
    ref: Category.name,
  })
  category: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

export type ProductModel = Model<Product>;

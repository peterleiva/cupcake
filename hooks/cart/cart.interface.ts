import type { Product } from '../products';

export type CartItem<T> = {
  product: Product;
  quantity: number;
};

export type ShoppingCart<T> = CartItem<T>[];

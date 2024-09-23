import { DateTime } from 'luxon';
import { Category } from '../categories';

export interface ProductDTO {
  _id: string;
  name: string;
  description?: string;
  price: number;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category?: Category;
  createdAt: DateTime;
  updatedAt: DateTime;
}

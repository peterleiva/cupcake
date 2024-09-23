import { DateTime } from 'luxon';

export interface ProductDTO {
  _id: string;
  name: string;
  description?: string;
  price: number;
  categoryID?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryID?: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

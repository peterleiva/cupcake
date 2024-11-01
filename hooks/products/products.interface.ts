import { DateTime } from 'luxon';
import { Category, CategoryDTO } from '../categories';

export interface ProductDTO {
  _id: string;
  name: string;
  description?: string;
  price: number;
  category?: CategoryDTO;
  favorite?: boolean;
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category?: Category;
  thumbnail?: string;
  favorite: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface ProductFilter {
  category: string | null | undefined;
  favorites: boolean | undefined;
  searchterm: string | null | undefined;
}

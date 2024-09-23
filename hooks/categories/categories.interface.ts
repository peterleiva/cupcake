import { DateTime } from 'luxon';

export type Category = {
  id: string;
  name: string;
  slug: string;
  createdAt: DateTime;
  updatedAt: DateTime;
};

export interface CategoryDTO {
  _id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

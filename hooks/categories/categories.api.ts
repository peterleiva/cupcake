import { API } from '@/app.env';
import { Category } from './categories.interface';
import { sleep } from '@/libs/sleep';

export async function getAllCategories(): Promise<Category[]> {
  const url = `${API}/category`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Erro ao buscar categorias');
  }

  return res.json();
}

import { API } from '@/app.env';
import { Category, CategoryDTO } from './categories.interface';

export async function getAllCategories(): Promise<CategoryDTO[]> {
  const url = `${API}/category`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Erro ao buscar categorias');
  }

  return res.json();
}

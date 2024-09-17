import { FlatList, LogBox, Text, View } from 'react-native';
import { Suspense } from 'react';

import { CatalogCard, CategoryList } from '@/components/catalog';
import { range } from '@/libs';
import { API } from '@/app.env';
import { useQuery } from '@tanstack/react-query';
import { sleep } from '@/libs/sleep';
import { useRefreshOnFocus } from '@/hooks/useAppFocus';

export type Category = {
  _id: string;
  name: string;
  slug: string;
};

async function getAllCategories(): Promise<Category[]> {
  const url = `${API}/category`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Erro ao buscar categorias');
  }

  return res.json();
}

const Search = () => {
  const { data, refetch } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  });

  useRefreshOnFocus(refetch);

  return (
    <View>
      <Suspense fallback={<Text>carregando...</Text>}>
        <CategoryList categories={data?.map?.((d) => d.name)} />
      </Suspense>
      <FlatList
        style={{ padding: 20 }}
        ListEmptyComponent={() => <Text>Nenhum item encontrado</Text>}
        data={range(1, 10)}
        numColumns={1}
        ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
        renderItem={() => <CatalogCard></CatalogCard>}
      ></FlatList>
    </View>
  );
};

export default Search;

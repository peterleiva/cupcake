import { Suspense } from 'react';
import { FlatList, Text, View } from 'react-native';

import { CatalogCard, CategoryList } from '@/components/catalog';
import { useGetCategories } from '@/hooks/categories';
import { useRefreshOnFocus } from '@/hooks/useAppFocus';
import { range } from '@/libs';

const Search = () => {
  const { data, refetch } = useGetCategories();

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

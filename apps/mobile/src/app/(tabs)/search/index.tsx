import { FlatList, Text, View } from 'react-native';

import { range } from 'utils';

import { CategoryList, CatalogCard } from 'apps/mobile/src/components/catalog';

const Search = () => {
  const categories: string[] = ['Todos', 'Roupas', 'Eletrônicos', 'Livros'];

  return (
    <View>
      <CategoryList categories={categories} />
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

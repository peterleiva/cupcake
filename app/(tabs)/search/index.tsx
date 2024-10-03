import AntDesign from '@expo/vector-icons/AntDesign';
import { Suspense, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';

import { CatalogList, CategoryList } from '@/components/catalog';
import Loader from '@/components/Loader';
import { useSearchScreenParams } from '@/hooks/useSearchParams';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modal, useModal } from '@/components/modal';
import { useRouter } from 'expo-router';
import { Category } from '@/hooks/categories';
import { useDebounce } from '@uidotdev/usehooks';

const Search = () => {
  const { category: categoryId } = useSearchScreenParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState<Category | null>(null);
  const { navigate } = useRouter();
  const { showModal } = useModal();

  const onApplyFilter = () => {
    navigate({
      pathname: '/search',
      params: { category: category?.id },
    });
  };

  return (
    <Suspense fallback={<Loader />}>
      <SafeAreaView style={styles.container}>
        <View style={styles.filter}>
          <Searchbar
            placeholder="Buscar"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchBar}
          />
          <AntDesign name="filter" size={24} onPress={showModal} />
        </View>
        <CatalogList category={categoryId} />
      </SafeAreaView>

      <Modal onApply={onApplyFilter}>
        <View>
          <Text variant="titleLarge">Categoria</Text>
          <CategoryList category={categoryId} onPress={setCategory} />
        </View>
      </Modal>
    </Suspense>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 32,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
  },
});

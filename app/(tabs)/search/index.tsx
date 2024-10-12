import AntDesign from '@expo/vector-icons/AntDesign';
import { Suspense, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { CatalogList } from '@/components/catalog';
import {
  CatalogFilterModal,
  CatalogFilterParams,
} from '@/components/catalog/CatalogFilterModal';
import Loader from '@/components/Loader';
import { useModal } from '@/components/modal';
import { useSearchScreenParams } from '@/hooks/useSearchParams';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDebounce } from '@uidotdev/usehooks';

const Search = () => {
  const {
    category: categoryId,
    favorites,
    searchterm: keyword,
  } = useSearchScreenParams();
  const [searchQuery, setSearchQuery] = useState('');
  const { navigate } = useRouter();
  const { showModal } = useModal();
  const [filter, setFilter] = useState<CatalogFilterParams | null>(null);
  const searchterm = useDebounce(searchQuery, 300);

  const isFilterApplied: boolean = !!categoryId || !!favorites;

  useEffect(() => {
    navigate({
      pathname: '/search',
      params: {
        category: filter?.category?.id,
        favorites: filter?.favorites ? 1 : 0,
        searchterm,
      },
    });
  }, [filter, searchterm]);

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
          <AntDesign
            name="filter"
            size={24}
            onPress={showModal}
            color={isFilterApplied ? 'brown' : 'black'}
          />
        </View>
        <CatalogList
          category={categoryId}
          favorites={favorites}
          searchterm={searchterm}
        />
      </SafeAreaView>
      <CatalogFilterModal
        category={categoryId}
        favorites={favorites}
        onFilter={setFilter}
      />
    </Suspense>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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

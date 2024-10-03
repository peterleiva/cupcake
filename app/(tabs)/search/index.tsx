import AntDesign from '@expo/vector-icons/AntDesign';
import { Suspense, useState } from 'react';
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

const Search = () => {
  const { category: categoryId } = useSearchScreenParams();
  const [searchQuery, setSearchQuery] = useState('');
  const { navigate } = useRouter();
  const { showModal } = useModal();

  const haveFilter: boolean = !!categoryId;

  const onApplyFilter = ({ category }: CatalogFilterParams) => {
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
          <AntDesign
            name="filter"
            size={24}
            onPress={showModal}
            color={haveFilter ? 'brown' : 'black'}
          />
        </View>
        <CatalogList category={categoryId} />
      </SafeAreaView>
      <CatalogFilterModal category={categoryId} onFilter={onApplyFilter} />
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

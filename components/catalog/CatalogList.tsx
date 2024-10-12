import { FlatList, View } from 'react-native';

import { useCart } from '@/hooks/cart';
import { Product, useGetProducts } from '@/hooks/products';
import EmptyState from '../EmptyState';
import Loader from '../Loader';
import { useSnackbar } from '../snackbar';
import CatalogCard from './CatalogCard';

interface CatalogCardProps {
  category: string | null | undefined;
  favorites?: boolean;
  searchterm?: string;
}

export default function CatalogList({
  category,
  favorites,
  searchterm,
}: CatalogCardProps) {
  const { data, isFetching, refetch } = useGetProducts({
    category,
    favorites,
    searchterm,
  });

  const { snackbarAlert } = useSnackbar();
  const { addToCart } = useCart();

  const loadMore = () => {
    // refetch();
  };

  if (isFetching) {
    return <Loader />;
  }

  const addProductToCart = (product: Product) => {
    addToCart(product);
    snackbarAlert('Produto adicionado ao carrinho');
  };

  const toggleFavorite = (product: Product) => {
    snackbarAlert('Não implementado');
    refetch();
  };

  return (
    <>
      <FlatList
        onRefresh={refetch}
        refreshing={isFetching}
        ListEmptyComponent={<EmptyState />}
        data={data}
        numColumns={1}
        ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
        renderItem={({ item: product }) => (
          <CatalogCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category?.name}
            favorite={product.favorite}
            addTocart={() => addProductToCart(product)}
            pressFavorite={() => toggleFavorite(product)}
          ></CatalogCard>
        )}
      />
    </>
  );
}

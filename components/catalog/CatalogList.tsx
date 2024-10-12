import { Product, useGetProducts } from '@/hooks/products';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import EmptyState from '../EmptyState';
import CatalogCard from './CatalogCard';
import Loader from '../Loader';
import { useCart } from '@/hooks/cart';
import { Snackbar } from 'react-native-paper';

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
  const { data, isFetching, refetch, isLoading } = useGetProducts({
    category,
    favorites,
    searchterm,
  });

  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);

  const { addProduct } = useCart();

  const loadMore = () => {
    // refetch();
  };

  if (isFetching) {
    return <Loader />;
  }

  const addProductToCart = (product: Product) => {
    setVisible(true);
    addProduct(product);
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
          ></CatalogCard>
        )}
      />
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        Produto adicionado ao carrinho
      </Snackbar>
    </>
  );
}

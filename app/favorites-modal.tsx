import Loader from '@/components/Loader';
import { Product, useGetProducts } from '@/hooks/products';
import { formatCurrency } from '@/libs/currency';
import { useAssets } from 'expo-asset';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';
import {
  Text,
  Divider,
  IconButton,
  List,
  ActivityIndicator,
} from 'react-native-paper';

export default function ShoppingCartModal() {
  const { navigate } = useRouter();
  const { data, isFetching } = useGetProducts({ favorites: true });
  const [assets] = useAssets(require('@/assets/images/placeholder.png'));

  const goBack = () => {
    navigate('../');
  };

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <View>
      <List.Item
        title={item.name}
        description={`Preço: ${formatCurrency(item.price)}`}
        left={(props) => (
          <Image
            {...props}
            style={styles.cardImage}
            source={{ uri: item.thumbnail ?? assets?.[0]?.uri }}
          ></Image>
        )}
        right={(props) => <IconButton icon="heart" size={20} />}
      />
      <Divider />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="window-close" size={24} onPress={goBack} />
      </View>
      <View style={styles.content}>
        <Text variant="displaySmall" style={styles.title}>
          Meus favoritos
        </Text>
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data ?? []}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={() => (
              <Text style={styles.emptyState}>Sem favoritos</Text>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  cardImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginTop: 4,
  },
  emptyState: {
    textAlign: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  totalContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButtonContainer: {
    padding: 20,
    alignItems: 'center',
  },
  clearButton: {
    marginTop: 10,
  },
});

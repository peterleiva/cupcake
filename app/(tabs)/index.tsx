import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Product, useGetProducts } from '@/hooks/products';
import { Button, Card, Paragraph, Text, Title } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { CatalogList } from '@/components/catalog';

const favoriteItems = [
  { id: '1', name: 'Favorite Item 1', image: 'https://picsum.photos/200/150' },
  { id: '2', name: 'Favorite Item 2', image: 'https://picsum.photos/200/150' },
];

const featuredProducts = [
  {
    id: '1',
    name: 'Featured Product 1',
    image: 'https://picsum.photos/200/150',
  },
  {
    id: '2',
    name: 'Featured Product 2',
    image: 'https://picsum.photos/200/150',
  },
];

export default function HomeScreen() {
  const { data: favorites } = useGetProducts({ favorites: true });
  const { data: featured } = useGetProducts({}, { pageSize: 4 });

  const renderFavoriteItem: ListRenderItem<Product> = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover
        source={{ uri: item.thumbnail }}
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />
      <Card.Content style={styles.cardContent}>
        <Text variant="bodySmall" textBreakStrategy="highQuality">
          {item.name}
        </Text>
      </Card.Content>
    </Card>
  );

  const renderFeaturedProduct: ListRenderItem<Product> = ({ item }) => (
    <Card style={{ width: '47%', height: 250, margin: 5 }}>
      <Card.Cover source={{ uri: item.thumbnail }} />
      <Card.Content style={styles.cardContent}>
        <Text variant="bodySmall" textBreakStrategy="highQuality">
          {item.name}
        </Text>
      </Card.Content>
    </Card>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/background.jpg')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.headerText}>
          Bem-vindo a nossa loja!
        </ThemedText>
        <ThemedText style={styles.descriptionText}>
          Explore nossa ampla gama de produtos e encontre seus favoritos.
          Oferecemos a melhor qualidade aos melhores preços.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Destaques
        </ThemedText>
        <FlatList
          numColumns={2}
          data={featured}
          renderItem={renderFeaturedProduct}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
          style={styles.list}
        />
      </ThemedView>

      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Seus favoritos <Entypo name="star" size={24} color="black" />
      </ThemedText>
      <FlatList
        data={favorites}
        renderItem={renderFavoriteItem}
        keyExtractor={(item) => item.id}
        horizontal
        alwaysBounceHorizontal
        style={styles.list}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 340,
    width: 500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    textAlign: 'center',
    marginVertical: 16,
  },
  descriptionText: {
    textAlign: 'center',
    marginBottom: 24,
  },
  sectionTitle: {
    marginVertical: 16,
  },
  list: {
    marginBottom: 24,
    paddingBottom: 10,
  },
  card: {
    marginRight: 16,
    width: 120,
    height: '100%',
  },
  cardContent: {
    padding: 4,
  },
});

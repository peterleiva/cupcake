import { useProductFavorite } from '@/hooks/products';
import { formatCurrency } from '@/libs/currency';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useAssets } from 'expo-asset';
import { useEffect, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { ActivityIndicator, Card, Text } from 'react-native-paper';
import { useSnackbar } from '../snackbar';

export interface CatalogCardProps {
  id: string;
  name: string;
  price: number;
  category?: string;
  favorite?: boolean;
  thumbnail?: string;
  addTocart?: () => void;
  pressFavorite?: () => void;
  FavoriteLoading?: React.ReactNode;
}

export default function CatalogCard({
  id,
  name,
  price,
  category,
  favorite,
  thumbnail,
  pressFavorite,
}: CatalogCardProps) {
  const mutation = useProductFavorite();
  const [assets] = useAssets(require('@/assets/images/placeholder.png'));
  const [isFavorite, setIsFavorite] = useState(favorite);
  const { snackbarAlert } = useSnackbar();
  const placeholder = assets?.[0] as ImageSourcePropType | undefined;

  const handleFavorite = () => {
    const favorite = !isFavorite;

    mutation.mutate(
      { id, favorite },
      {
        onSuccess: () => {
          setIsFavorite(favorite);
          snackbarAlert(
            `Produto ${isFavorite ? 'removido' : 'adicionado'} aos favoritos`,
          );
          pressFavorite?.();
        },
      },
    );
  };

  return (
    <Card style={style.container}>
      <View style={style.actions}>
        {category && <Text style={style.category}>{category}</Text>}
        {mutation.isPending ? (
          <ActivityIndicator />
        ) : (
          <AntDesign
            style={style.likeBtn}
            name={isFavorite ? 'heart' : 'hearto'}
            size={16}
            color="red"
            onPress={handleFavorite}
          />
        )}
      </View>
      <Image
        style={{
          width: 380,
          height: 150,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
        source={placeholder && !thumbnail ? placeholder : { uri: thumbnail }}
      ></Image>
      <View style={style.caption}>
        <View>
          <Text>{name}</Text>
        </View>
        <View>
          <Text style={style.captionPrice}>{formatCurrency(price)}</Text>
        </View>
      </View>
      {/* <View>
        <IconButton
          icon="cart"
          size={24}
          onPress={addTocart}
          style={{ marginTop: 10 }}
        />
      </View> */}
    </Card>
  );
}

const style = StyleSheet.create({
  container: {
    position: 'relative',
  },
  actions: {
    justifyContent: 'space-between',
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
    top: '5%',
    left: '2.5%',
    zIndex: 1,
  },
  likeBtn: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 6,
    overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
  },
  category: {
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 6,
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
  },
  caption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: '500',
    padding: 10,
  },

  captionPrice: {
    fontWeight: 'bold',
    flexGrow: 1,
  },
});

import { View, Text, Image, StyleSheet, Platform, LogBox } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Card } from 'react-native-paper';
import { formatCurrency } from '@/libs/currency';

export interface CatalogCardProps {
  name: string;
  price: number;
  category?: string;
}

export default function CatalogCard({
  name,
  price,
  category,
}: CatalogCardProps) {
  return (
    <Card style={style.container}>
      <View style={style.actions}>
        {category && <Text style={style.category}>{category}</Text>}
        <AntDesign style={style.likeBtn} name="hearto" size={16} color="red" />
      </View>
      <Image
        style={{
          height: 150,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
        source={{ uri: 'https://picsum.photos/200/150' }}
      ></Image>
      <View style={style.caption}>
        <View>
          <Text>{name}</Text>
        </View>
        <View>
          <Text style={style.captionPrice}>{formatCurrency(price)}</Text>
        </View>
      </View>
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

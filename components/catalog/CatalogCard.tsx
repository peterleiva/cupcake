import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Card } from 'react-native-paper';

export default function CatalogCard() {
  return (
    <Card style={style.container}>
      <View style={style.actions}>
        <Text style={style.category}>Aniversário</Text>
        <AntDesign style={style.likeBtn} name="hearto" size={16} color="red" />
      </View>
      <Image
        style={{ width: '100%', height: 150 }}
        source={{ uri: 'https://picsum.photos/200/150' }}
      ></Image>
      <View style={style.caption}>
        <View>
          <Text>Cherry Candy</Text>
        </View>
        <View>
          <Text style={style.captionPrice}>R$ 175,00</Text>
        </View>
      </View>
    </Card>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
    position: 'relative',
  },
  actions: {
    justifyContent: 'space-between',
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    top: '5%',
    left: '5%',
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
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  captionPrice: {
    fontWeight: 'bold',
    flexGrow: 1,
  },
});

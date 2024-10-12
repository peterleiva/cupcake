import { formatCurrency } from '@/libs/currency';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { Divider, IconButton, List, TextInput } from 'react-native-paper';

export default function ShoppingCartScreen() {
  const { navigate } = useRouter();

  const goBack = () => {
    navigate('../');
  };

  const items = [
    { id: '1', name: 'Item 1', price: 10.0, quantity: 1 },
    { id: '2', name: 'Item 2', price: 20.0, quantity: 1 },
    { id: '3', name: 'Item 3', price: 30.0, quantity: 1 },
  ];

  const [cartItems, setCartItems] = useState(items);

  const handleQuantityChange = (id: string, quantity: string) => {
    quantity = quantity.replace(/\D/g, '');

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item,
      ),
    );
  };

  const renderItem: ListRenderItem<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }> = ({ item }) => (
    <View>
      <List.Item
        title={item.name}
        description={`Preço: ${formatCurrency(item.price)}`}
        left={(props) => <List.Icon {...props} icon="cart" />}
        right={(props) => (
          <TextInput
            {...props}
            mode="outlined"
            label="qtd"
            value={item.quantity.toString()}
            onChangeText={(text) => handleQuantityChange(item.id, text)}
            style={{ width: 80 }}
            keyboardType="numeric"
          />
        )}
      />
      <Divider />
    </View>
  );

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="window-close" size={24} onPress={goBack} />
      </View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>
          Total: {formatCurrency(calculateTotal())}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
});

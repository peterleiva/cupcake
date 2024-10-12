import { useCart } from '@/hooks/cart';
import { CartItem } from '@/hooks/cart/cart.interface';
import { Product } from '@/hooks/products';
import { formatCurrency } from '@/libs/currency';
import { useRouter } from 'expo-router';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import {
  Button,
  Divider,
  IconButton,
  List,
  TextInput,
} from 'react-native-paper';

export default function ShoppingCartModal() {
  const { navigate } = useRouter();

  const goBack = () => {
    navigate('../');
  };
  const { cartItems, updateQuantity, calculateTotal, clearCart } = useCart();

  const handleQuantityChange = (id: string, quantity: string) => {
    quantity = quantity.replace(/\D/g, '');
    updateQuantity(id, +quantity);
  };

  const renderItem: ListRenderItem<CartItem<Product>> = ({ item }) => (
    <View>
      <List.Item
        title={item.product.name}
        description={`Preço: ${formatCurrency(item.product.price)}`}
        left={(props) => <List.Icon {...props} icon="cart" />}
        right={(props) => (
          <View>
            <TextInput
              {...props}
              mode="outlined"
              label="qtd"
              value={item.quantity.toString()}
              onChangeText={(text) =>
                handleQuantityChange(item.product.id, text)
              }
              style={{ width: 80 }}
              keyboardType="numeric"
            />
          </View>
        )}
      />
      <Divider />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="window-close" size={24} onPress={goBack} />
      </View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', padding: 20 }}>
            Carrinho vazio
          </Text>
        }
      />
      {cartItems && cartItems.length > 0 && (
        <View style={styles.clearButtonContainer}>
          <Button
            mode="contained"
            onPress={clearCart}
            style={styles.clearButton}
          >
            Limpar Carrinho
          </Button>
        </View>
      )}

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
  clearButtonContainer: {
    padding: 20,
    alignItems: 'center',
  },
  clearButton: {
    marginTop: 10,
  },
});

import { useState } from 'react';

import { type Product } from '../products';
import { setupProducts } from '../products/products.mock';
import type { ShoppingCart } from './cart.interface';

const items: ShoppingCart<Product> = setupProducts(3).map((product) => ({
  quantity: 1,
  product,
}));

export function useCart() {
  const [cartItems, setCartItems] = useState<ShoppingCart<Product>>(items);

  const updateQuantity = (id: string, quantity: string) => {
    quantity = quantity.replace(/\D/g, '');

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item,
      ),
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, { product, quantity }) => total + product.price * quantity,
      0,
    );
  };

  const getProductById = (product: Product) => {
    return cartItems.find((item) => item.product.id === product.id);
  };

  const addProduct = (product: Product) => {
    const item = getProductById(product);

    if (item) {
      updateQuantity(item.product.id, (item.quantity + 1).toString());
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        {
          product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeProduct = (product: Product) => {
    const item = getProductById(product);

    if (item) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product.id !== product.id),
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    updateQuantity,
    calculateTotal,
    removeProduct,
    addProduct,
    clearCart,
  };
}

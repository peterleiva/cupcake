import { useEffect, useState } from 'react';

import { clearStorage, getValue, save } from '@/libs/async-storage';
import { type Product } from '../products';
import type { ShoppingCart } from './cart.interface';

const STORAGE_KEY = 'cart';

export function useCart() {
  const [cartItems, setCartItems] = useState<ShoppingCart<Product>>([]);

  useEffect(() => {
    save(STORAGE_KEY, cartItems);
  }, [cartItems]);

  useEffect(() => {
    (async () => {
      const savedCart = await getValue<ShoppingCart<Product>>(STORAGE_KEY);

      if (savedCart) {
        setCartItems(savedCart);
      }
    })();
  }, [setCartItems]);

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems?.map((item) =>
        item.product.id === id
          ? {
              ...item,
              quantity,
            }
          : item,
      ),
    );
  };

  const calculateTotal = () => {
    return (
      cartItems?.reduce(
        (total, { product, quantity }) => total + product.price * quantity,
        0,
      ) ?? 0
    );
  };

  const getProductById = (product: Product) => {
    return cartItems?.find((item) => item.product.id === product.id);
  };

  const addProduct = (product: Product) => {
    const item = getProductById(product);

    if (item) {
      updateQuantity(item.product.id, item.quantity + 1);
    } else {
      setCartItems((prevItems) => [
        ...(prevItems ?? []),
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
      setCartItems(cartItems?.filter((item) => item.product.id !== product.id));
    }
  };

  const clearCart = () => {
    setCartItems(() => []);
    clearStorage(STORAGE_KEY);
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

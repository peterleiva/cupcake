import { type Href } from 'expo-router';

export const APP_ROUTES: Record<string, () => Href<string> | Href<string>> = {
  home: () => '/',
  search: () => '/search',
  shoppingCart: () => '/shopping-cart-modal',
  favorites: () => '/favorites-modal',
} as const;

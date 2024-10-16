import { type Href } from 'expo-router';

export const APP_ROUTES: Record<string, () => Href<string> | Href<string>> = {
  home: () => '/(tabs)',
  search: () => '/search',
  shoppingCart: () => '/shopping-cart-modal',
  favorites: () => '/favorites-modal',
  signin: () => '/(sec)',
} as const;

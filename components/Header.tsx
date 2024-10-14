import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { Appbar, Badge } from 'react-native-paper';

import { APP_ROUTES } from '@/constants/routes.consts';
import { useCart } from '@/hooks/cart';

export default function Header() {
  const { navigate } = useRouter();
  const { cartItems } = useCart();

  const goToCart = () => {
    navigate(APP_ROUTES.shoppingCart());
  };

  const goToFavorites = () => {
    navigate(APP_ROUTES.favorites());
  };

  return (
    <Appbar.Header>
      <Appbar.Content title="Cafeteria Gourmet" />
      {/* <Appbar.Action
        icon={() => (
          <>
            {cartItems && cartItems?.length > 0 && (
              <Badge
                size={16}
                style={{
                  position: 'absolute',
                  bottom: -10,
                }}
              >
                {cartItems?.length}
              </Badge>
            )}
            <AntDesign name="shoppingcart" size={24} />
          </>
        )}
        onPress={goToCart}
      /> */}
      <Appbar.Action
        icon={() => <AntDesign name="hearto" size={24} />}
        onPress={goToFavorites}
      />
    </Appbar.Header>
  );
}

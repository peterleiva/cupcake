import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { Appbar } from 'react-native-paper';

import { APP_ROUTES } from '@/constants/routes.consts';

export default function Header() {
  const { navigate } = useRouter();

  const goToCart = () => {
    navigate(APP_ROUTES.shoppingCart());
  };

  return (
    <Appbar.Header>
      <Appbar.Content title="Cafeteria Gourmet" />
      <Appbar.Action
        icon={() => <AntDesign name="shoppingcart" size={24} />}
        onPress={goToCart}
      />
    </Appbar.Header>
  );
}

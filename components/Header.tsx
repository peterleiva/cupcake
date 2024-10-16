import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { Appbar } from 'react-native-paper';

import { APP_ROUTES } from '@/constants/routes.consts';
import { useAuth } from '@/modules/security/auth';

export default function Header() {
  const { navigate } = useRouter();
  const { logout } = useAuth();

  const goToFavorites = () => {
    navigate(APP_ROUTES.favorites());
  };

  const signOut = () => {
    logout();
  };

  return (
    <Appbar.Header>
      <Appbar.Content title="Cafeteria Gourmet" />
      <Appbar.Action
        icon={() => <AntDesign name="hearto" size={24} />}
        onPress={goToFavorites}
      />
      <Appbar.Action
        icon={() => <AntDesign name="logout" size={24} />}
        onPress={signOut}
      />
    </Appbar.Header>
  );
}

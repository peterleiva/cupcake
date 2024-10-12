import { Portal, Snackbar as PaperSnackbar } from 'react-native-paper';
import { useSnackbar } from './snackbar.hook';

export function Snackbar() {
  const { close, visible, message } = useSnackbar();

  return (
    <Portal>
      <PaperSnackbar
        visible={visible}
        onDismiss={close}
        action={close ? { label: 'Fechar', onPress: close } : undefined}
      >
        {message}
      </PaperSnackbar>
    </Portal>
  );
}
